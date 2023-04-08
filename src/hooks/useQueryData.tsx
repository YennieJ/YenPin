import { CardType } from "types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  FbGetAllCards,
  FbGetMyCards,
  FbGetPopularCards,
  FbCreateCard,
  FbUpdateCard,
  FbLikeCard,
} from "service/card_repository";

export const useAllCardsQueryData = () => {
  return useQuery<CardType[]>("allCards", FbGetAllCards);
};

export const useMyCardsQueryData = (userUid: string) => {
  return useQuery<CardType[]>(["myCards"], () => FbGetMyCards(userUid));
};

export const usePopularCardsQueryData = () => {
  return useQuery<CardType[]>(["popular"], () => FbGetPopularCards());
};

export const useCreateCardMutationData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => FbCreateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
    },
  });
};

export const useUpdateMutationData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => FbUpdateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
    },
  });
};

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
