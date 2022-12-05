import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "service/authContext";
import { UpdateProfile } from "service/auth_service";

import imageCompression from "browser-image-compression";

import * as S from "./profile.styled";

const PROFILE_IMAGE = "/image/profile.jpeg";

const Profile = () => {
  const userInfo = useContext(AuthContext);

  const photoRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState<boolean>(false);

  const [newDisplayName, setNewDisplayName] = useState<string>(
    userInfo!.displayName || "User Name"
  );

  const [newUserPhoto, setUserPhoto] = useState<string>(
    userInfo!.photoURL || PROFILE_IMAGE
  );

  const userNameMaxLength = newDisplayName.length >= 31;

  const warningMsg = () => {
    let text = "";
    if (newDisplayName.length === 0) {
      text = "프로필 이름을 입력하세요.";
    } else if (newDisplayName.length >= 31) {
      text = "30자 이하로 입력하세요";
    }

    return text;
  };

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

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      // resize된 이미지의 url을 받아 fileUrl에 저장
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setUserPhoto(result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userNameMaxLength) {
      alert("이름을 30자 이하로 입력해세요.");
    } else if (
      userInfo!.displayName !== newDisplayName ||
      userInfo!.photoURL !== newUserPhoto
    ) {
      UpdateProfile({ newDisplayName, newUserPhoto });
    }
  };

  const onPhotoClick = () => {
    editing && photoRef.current?.click();
  };

  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <S.ImgContainer editing={editing} onClick={onPhotoClick}>
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
        ) : (
          <S.DisplayName>
            <span>{newDisplayName}</span>
            <span>{userInfo!.email}</span>
          </S.DisplayName>
        )}

        <button
          type={editing ? "button" : "submit"}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "프로필 저장" : "프로필 수정"}
        </button>
      </S.Form>
    </S.Container>
  );
};

export default Profile;
