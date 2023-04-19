import React, { useState, useContext, useRef } from "react";

import { useForm } from "react-hook-form";
import { useResetRecoilState } from "recoil";
import { AuthContext } from "service/authContext";

import { UpdateProfile } from "service/auth_service";
import { ImgConvert } from "hooks/img_uploader";
import { onSidebarAtom } from "atoms";

import * as S from "./profile.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const PROFILE_IMAGE = "/images/profile.jpeg";

const Profile = () => {
  const closeSidebar = useResetRecoilState(onSidebarAtom);
  const userInfo = useContext(AuthContext);
  const userId = userInfo!.uid;

  const [editing, setEditing] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState(
    userInfo?.displayName || "User Name"
  );

  const [photo, setPhoto] = useState<File>();
  const [photoURL, setPhotoURL] = useState<string>(
    userInfo!.photoURL || PROFILE_IMAGE
  );

  const photoRef = useRef<HTMLInputElement>(null);

  //inputfile 대신 사진클릭
  const handlePhotoRef = () => {
    photoRef.current?.click();
  };

  // editing 때 프로플 사진 변화,컨버트
  const onPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPhoto(file);
    ImgConvert(file, setPhotoURL);
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

  // submit
  const onValid = () => {
    const getName = getValues("userName");
    if (displayName === getName && userInfo?.photoURL === photoURL) {
      if (window.confirm("변경사항이 없습니다. 그대로 진행 하시겠습니까?")) {
        setEditing(false);
        return;
      }
    } else if (window.confirm("변경하시겠습니까?")) {
      UpdateProfile({ getName, photo, userId });
      setDisplayName(getName);
    }
    setEditing(false);
  };

  // 프로필 수정, 돌아가기
  const handleEdit = () => {
    if (editing) {
      reset();
      setPhotoURL(userInfo?.photoURL || PROFILE_IMAGE);
    }
    setEditing(!editing);
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
        <img alt="" src={photoURL} />
        <input
          hidden
          ref={photoRef}
          type="file"
          accept="image/*"
          onChange={onPhotoChange}
        />
      </S.PhotoContainer>
      <form onSubmit={handleSubmit(onValid)}>
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
