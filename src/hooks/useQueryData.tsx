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
  GetPopularCard,
  SaveCard,
  UpdateCard,
} from "service/card";

export const useAllCardQueryData = () => {
  return useQuery<Type[]>("allCards", GetCard);
};

export const useMyCardQueryData = (userUid: string) => {
  return useQuery<Type[]>(["myCards"], () => GetMyCard(userUid));
};

export const usePopularCardData = () => {
  return useQuery<Type[]>(["popular"], () => GetPopularCard());
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

export const useLikeData = (userUid: string, card: Type) => {
  const queryClient = useQueryClient();
  return useMutation(() => CountLikes(userUid, card), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
      queryClient.invalidateQueries(["popular"]);
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
function userUid(userUid: any, card: Type): Promise<void> {
  throw new Error("Function not implemented.");
}
