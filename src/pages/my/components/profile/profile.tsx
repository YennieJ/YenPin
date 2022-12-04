import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "service/authContext";
import imageCompression from "browser-image-compression";

import { UpdateProfile } from "service/auth_service";

const Profile = () => {
  const userInfo = useContext(AuthContext);

  const photoRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState<boolean>(false);

  const [newDisplayName, setNewDisplayName] = useState<string>(
    userInfo!.displayName || ""
  );
  const [newUserPhoto, setUserPhoto] = useState<string>(
    userInfo!.photoURL || ""
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

    if (
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
    <div>
      <h1>PROFILE</h1>
      <form onSubmit={onSubmit}>
        <div onClick={onPhotoClick}>
          <img alt="" src={newUserPhoto} />
          <input
            hidden
            ref={photoRef}
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
        </div>

        <input
          onChange={onChange}
          type="text"
          readOnly={editing ? false : true}
          name="userName"
          placeholder="User Name"
          value={newDisplayName}
        />
        <button
          type={editing ? "button" : "submit"}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "프로필 저장" : "프로필 수정"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
