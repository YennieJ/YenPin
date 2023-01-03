import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "service/authContext";
import { UpdateProfile } from "service/auth_service";
import { ImgConvert } from "service/img_uploader";

import * as S from "./profile.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useResetRecoilState } from "recoil";
import { onSidebarAtom } from "style/atoms";

const PROFILE_IMAGE = "/image/profile.jpeg";

const Profile = () => {
  const closeSidebar = useResetRecoilState(onSidebarAtom);

  const userInfo = useContext(AuthContext);

  const photoRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState<boolean>(false);
  const [newDisplayName, setNewDisplayName] = useState<string>(
    userInfo!.displayName || "User Name"
  );
  const [newUserPhoto, setUserPhoto] = useState<string>(
    userInfo!.photoURL || PROFILE_IMAGE
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];

    ImgConvert(file, setUserPhoto);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (0 === newDisplayName.length || newDisplayName.length > 10) {
      return;
    } else if (
      userInfo!.displayName !== newDisplayName ||
      userInfo!.photoURL !== newUserPhoto
    )
      if (window.confirm("변경하시겠습니까?")) {
        UpdateProfile({ newDisplayName, newUserPhoto });
        setEditing(false);
      } else return;
    else if (
      userInfo!.displayName === newDisplayName &&
      userInfo!.photoURL === newUserPhoto
    )
      if (window.confirm("변경사항이 없습니다. 그대로 진행 하시겠습니까?")) {
        setEditing(false);
      } else return;
  };

  const onCancle = () => {
    setNewDisplayName(userInfo!.displayName as string);
    setUserPhoto(userInfo!.photoURL as string);
    setEditing(false);
  };

  const onPhotoClick = () => {
    editing && photoRef.current?.click();
  };

  const warningMsg = () => {
    let text = "";
    if (newDisplayName.length === 0) {
      text = "프로필 이름을 입력하세요.";
    } else if (newDisplayName.length > 10) {
      text = "10자 이하로 입력하세요";
    }
    return text;
  };

  return (
    <S.Container onClick={closeSidebar}>
      <S.Form>
        <S.ImgContainer onClick={onPhotoClick}>
          {editing && (
            <S.Overlay>
              <S.OverlayContent>
                <FontAwesomeIcon icon={faCamera} />
              </S.OverlayContent>
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
        </S.ImgContainer>
        {editing ? (
          <>
            <S.UserNameEdit warningMsg={warningMsg}>
              <input
                onChange={onChange}
                type="text"
                name="userName"
                placeholder="User Name"
                value={newDisplayName}
              />
              <span>{warningMsg()}</span>
            </S.UserNameEdit>
            <div>
              <button type="button" onClick={onCancle}>
                돌아가기
              </button>
              <button type="button" onClick={onSubmit}>
                프로필 저장
              </button>
            </div>
          </>
        ) : (
          <>
            <S.DisplayName>
              <span>{newDisplayName}</span>
              <span>{userInfo!.email}</span>
            </S.DisplayName>
            <button type="button" onClick={() => setEditing(true)}>
              프로필 수정
            </button>
          </>
        )}
      </S.Form>
    </S.Container>
  );
};

export default Profile;
