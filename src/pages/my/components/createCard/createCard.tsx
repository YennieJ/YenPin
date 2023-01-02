import React, { useState, useRef } from "react";

import { ImgConvert } from "service/img_uploader";
import { useCreateCardMutationData } from "hooks/useQueryData";

import * as S from "./createCard.styled";
import DialogBox from "components/dialogBox/dialogBox";

interface CardProps {
  handleCardModal: () => void;
  onCurrentPage: () => void;
  userUid: string;
}

export interface ICardForm {
  image: FileList;
  title: string;
  message: string;
}

const CreateCard = ({ handleCardModal, onCurrentPage, userUid }: CardProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [fileURL, setFileURL] = useState<string>("");

  const [textLength, setTextLength] = useState<number>(0);

  const [message, setMessage] = useState<string>("");

  const { mutate: addCard } = useCreateCardMutationData();

  const onCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cardNameRef.current!.value === "" || fileRef.current!.value === "") {
      alert("카드 이름과 파일은 비울 수 없습니다.");
    } else {
      const id = new Date().getTime();
      const messageTrim = message!.trim();
      const newCard = {
        id: id,
        title: cardNameRef.current!.value,
        image: fileURL,
        message: messageTrim,
        user: userUid,
        likeCount: 0,
        likeUids: [],
      };
      addCard(newCard);
      // file && FbUploadImageFile(file, id);
      formRef.current?.reset();
      handleCardModal();
      onCurrentPage();
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    ImgConvert(file, setFileURL);
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  const textHeightHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setTextLength(messageRef.current!.value.length);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  //   setError,
  // } = useForm<ICardForm>();

  // const [fileURL, setFileURL] = useState<string>("");
  // const image = watch("image");
  // const message = watch("message");

  // useEffect(() => {
  //   if (image && image.length > 0) {
  //     const file = image[0];
  //     ImgConvert(file, setFileURL);
  //   }
  // }, [image]);

  // const onValid = async (data: any) => {
  //   const id = new Date().getTime();
  //   if (!fileURL) {
  //     setError("image", { message: "Select your card image" });
  //   } else {
  //     const newCard = {
  //       id: id,
  //       image: fileURL,
  //       title: data.title,
  //       message: data.message.trim(),
  //       user: userUid,
  //     };
  //     UpdateMutation.mutate(newCard);
  //     handleCardModal();
  //   }
  // };
  return (
    <DialogBox preview>
      <S.CardForm ref={formRef} onSubmit={onCardSubmit}>
        <S.Content>
          {fileURL ? (
            <S.ImgContainer onClick={onButtonClick}>
              <S.Overlay>
                <S.OverlayContent>Change File</S.OverlayContent>
              </S.Overlay>
              <img alt="" src={fileURL} />
            </S.ImgContainer>
          ) : (
            <S.AddFileButton type="button" onClick={onButtonClick}>
              Add File
            </S.AddFileButton>
          )}
          <S.TextContainer>
            <input
              hidden
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
            <div>
              <input
                ref={cardNameRef}
                type="text"
                placeholder="카드 이름"
                maxLength={15}
              />
              <span>최대 15글자</span>
            </div>
            <div>
              <textarea
                rows={1}
                placeholder="사진에 대해 설명하세요"
                maxLength={200}
                ref={messageRef}
                onChange={textHeightHandler}
              />
              <span>{textLength}/200</span>
            </div>
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => handleCardModal()}>
            취소
          </S.Button>
          <S.Button type="submit">등록</S.Button>
        </S.ButtonContainer>
      </S.CardForm>

      {/* <S.CardForm onSubmit={handleSubmit(onValid)}>
        <S.Content>
          <img src="" alt="" style={{ width: "50px", height: "50px" }} />
          <S.ImgContainer>
            <img src={fileURL} alt="rlqhs" />
            <span>{errors?.image?.message}</span>
            <label htmlFor="fileUpload"> Select file</label>
            <input
              hidden
              type="file"
              id="fileUpload"
              {...register("image", { required: true })}
            />
          </S.ImgContainer>
          <S.TextContainer>
            <input
              type="text"
              placeholder="카드 이름"
              {...register("title", {
                required: "Write yout card title",
              })}
              maxLength={15}
            />
            <span>{errors?.title?.message}</span>
            <span>최대 15글자</span>

            <textarea
              rows={1}
              placeholder="사진에 대해 설명하세요"
              {...register("message")}
              maxLength={199}
            />
            <span>{message?.length}/200</span>
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => handleCardModal()}>
            취소
          </S.Button>
          <S.Button type="submit">등록</S.Button>
        </S.ButtonContainer>
      </S.CardForm> */}
    </DialogBox>
  );
};

export default CreateCard;
