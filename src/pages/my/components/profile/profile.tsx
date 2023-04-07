import React, { useState, useContext, useRef } from "react";
import { useResetRecoilState } from "recoil";

import { AuthContext } from "service/authContext";
import { UpdateProfile } from "service/auth_service";
import { ImgConvert } from "service/img_uploader";
import { onSidebarAtom } from "style/atoms";

import * as S from "./profile.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const PROFILE_IMAGE = "/image/profile.jpeg";

const Profile = () => {
  const closeSidebar = useResetRecoilState(onSidebarAtom);
  const userInfo = useContext(AuthContext);

  const photoRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState(
    userInfo?.displayName || "User Name"
  );
  const [newUserPhoto, setUserPhoto] = useState<string>(
    userInfo!.photoURL || PROFILE_IMAGE
  );

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];

    ImgConvert(file, setUserPhoto);
  };

  const handlePhotoRef = () => {
    photoRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: displayName,
    },
  });

  const inputName = register("userName", {
    required: "프로필 이름을 입력하세요",
    maxLength: {
      value: 10,
      message: "10자 이하로 입력하세요",
    },
  });

  const handleEdit = () => {
    if (editing) {
      reset();
      setUserPhoto((userInfo!.photoURL as string) || PROFILE_IMAGE);
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  const onvalid = () => {
    const getName = getValues("userName");
    if (displayName !== getName) {
      if (window.confirm("변경하시겠습니까?")) {
        UpdateProfile({ getName, newUserPhoto });
        setDisplayName(getName);
      }
    } else {
      if (window.confirm("변경사항이 없습니다. 그대로 진행 하시겠습니까?")) {
      }
    }
    setEditing(false);
  };

  return (
    <S.Container onClick={closeSidebar}>
      <S.PhotoContainer>
        {editing && (
          <S.Overlay onClick={() => handlePhotoRef()}>
            <div>
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </S.Overlay>
        )}
        <img alt="" src={newUserPhoto} />
        <input
          hidden
          ref={photoRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </S.PhotoContainer>
      <form onSubmit={handleSubmit(onvalid)}>
        <S.UserInfo editing={editing}>
          {editing ? (
            <>
              <input {...inputName} />
              <span>{errors.userName?.message}</span>
            </>
          ) : (
            <span>{displayName} </span>
          )}
          <span>{userInfo!.email}</span>
        </S.UserInfo>
        <S.ButtonBox editing={editing}>
          <button type="button" onClick={() => handleEdit()}>
            {editing ? "돌아가기" : "프로필 수정"}
          </button>
          <button type="submit">프로필 저장</button>
        </S.ButtonBox>
      </form>
    </S.Container>
  );
};

export default Profile;
