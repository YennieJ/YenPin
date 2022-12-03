import React, { useState, useContext } from "react";
import { AuthContext } from "service/authContext";
import imageCompression from "browser-image-compression";

import { UpdateProfile } from "service/auth_service";

const Profile = () => {
  const userInfo = useContext(AuthContext);

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
  return (
    <div>
      <h1>PROFILE</h1>
      <img alt="" src={newUserPhoto} />
      <h2>{newDisplayName}</h2>
      <h2>Edit Profile</h2>
      <form onSubmit={onSubmit}>
        <input
          // ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />

        <input
          onChange={onChange}
          type="text"
          name="userName"
          placeholder="User Name"
          value={newDisplayName}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
