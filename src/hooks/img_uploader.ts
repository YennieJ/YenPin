import imageCompression from "browser-image-compression";

// pages > my > profile
// pages > createCard
export async function ImgConvert(
  file: File,
  setPhotoURL: React.Dispatch<React.SetStateAction<string>>
) {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 1920,
  };

  try {
    const compressedFile = await imageCompression(file, options);

    const promise = imageCompression.getDataUrlFromFile(compressedFile);

    promise.then((result) => {
      setPhotoURL(result);
    });
  } catch (error) {
    console.log(error);
  }
}
