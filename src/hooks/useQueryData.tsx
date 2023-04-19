import { CardType } from "types";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  FbGetAllCards,
  FbGetMyCards,
  FbGetPopularCards,
  FbCreateCard,
  FbUpdateCard,
  FbLikeCard,
} from "service/card_repository";

// pages > home
export const useAllCardsQueryData = () => {
  return useQuery<CardType[]>("allCards", FbGetAllCards);
};

// pages > my
export const useMyCardsQueryData = (userUid: string) => {
  return useQuery<CardType[]>(["myCards"], () => FbGetMyCards(userUid));
};

// pages > popular
export const usePopularCardsQueryData = () => {
  return useQuery<CardType[]>(["popular"], () => FbGetPopularCards());
};

// Mutation? insert, update, delete가 실행 되었을 때 api를 다시 불러오는 trigger 역할

// pages > createCard
export const useCreateCardMutationData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => FbCreateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
    },
  });
};

// src > components > bigCard > components > edit
export const useUpdateMutationData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => FbUpdateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
    },
  });
};

// src > compoenets > preview > components > card
export const useLikeMutationData = (userUid: string, card: CardType) => {
  const queryClient = useQueryClient();
  return useMutation(() => FbLikeCard(userUid, card), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
      queryClient.invalidateQueries(["popular"]);
    },
  });
};
