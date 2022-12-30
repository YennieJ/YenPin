import { CardType, Type } from "types";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  CountLikes,
  GetCard,
  GetKeppCard,
  GetMyCard,
  SaveCard,
  UpdateCard,
} from "service/card";

export const useAllCardQueryData = () => {
  return useQuery<Type[]>("allCards", GetCard);
};

export const useMyCardQueryData = (userUid: string) => {
  return useQuery<Type[]>(["myCards"], () => GetMyCard(userUid));
};

export const useAddMyCardData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: Type) => SaveCard(newCard), {
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

export const useLikeData = () => {
  const queryClient = useQueryClient();
  return useMutation((card: Type) => CountLikes(card), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
    },
  });
};

export const useEditData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: Type) => UpdateCard(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
    },
  });
};

export const useKeepCardData = (userUid: string) => {
  return useQuery<Type[]>(["keepCards"], () => GetKeppCard(userUid));
};
