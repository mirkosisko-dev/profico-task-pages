import { useMutation } from "@tanstack/react-query";
import { deleteBookmark } from "../api/bookmark";
import { queryClient } from "@/config";
import { BOOKMARKS } from "../api/queryKeys";
import { useAuthState } from "@/features/auth/context/AuthContext";

const useDeleteBookmark = (onSuccess: () => void) => {
  const { user } = useAuthState();
  return useMutation({
    mutationFn: (body: { article_id: string }) =>
      deleteBookmark({ ...body, user_id: user?.id as number }),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries({ queryKey: [BOOKMARKS] });
    },
  });
};

export default useDeleteBookmark;
