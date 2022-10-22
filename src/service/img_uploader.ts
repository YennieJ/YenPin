import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class ImageUploader {
  async upload(file: any) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dhrny6pt");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dfqeczkvs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
