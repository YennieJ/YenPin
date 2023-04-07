import imageCompression from "browser-image-compression";

//setState로 넘기는 방법 뿐인가?
export async function ImgConvert(
  file: File,
  setFileURL: React.Dispatch<React.SetStateAction<string>>
) {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
  };

  try {
    const compressedFile = await imageCompression(file, options);

    const promise = imageCompression.getDataUrlFromFile(compressedFile);
    promise.then((result) => {
      setFileURL(result);
    });
  } catch (error) {
    console.log(error);
  }
}
