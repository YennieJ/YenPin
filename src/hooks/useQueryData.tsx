import { CardType } from "types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  FbGetAllCards,
  FbGetMyCards,
  FbGetPopularCards,
  FbCreateCard,
  FbUpdateCard,
  FbLikeCard,
  FbGetSavedCards,
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

export const useCreateCardQueryData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => FbCreateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
    },
    // onMutate: async (newCard) => {
    //   await queryClient.cancelQueries("myCards");
    //   const prev = queryClient.getQueryData("myCards");
    //   queryClient.setQueryData("myCards", (oldQueryData: any) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData, newCard],
    //     };
    //   });
    //   return {
    //     prev,
    //   };
    // },
  });
};

export const useUpdateQueryData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => FbUpdateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
    },
  });
};

export const useLikeQueryData = (userUid: string, card: CardType) => {
  const queryClient = useQueryClient();
  return useMutation(() => FbLikeCard(userUid, card), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
      queryClient.invalidateQueries(["popular"]);
    },
  });
};

export const useSavedQueryData = (userUid: string) => {
  return useQuery<CardType[]>(["keepCards"], () => FbGetSavedCards(userUid));
};
