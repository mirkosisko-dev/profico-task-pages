import { useMutation } from "@tanstack/react-query";
import { IBookmark } from "../types";
import { createBookmark } from "../api/bookmark";
import { queryClient } from "@/config";
import { BOOKMARKS } from "../api/queryKeys";

const useCreateBookmark = (onSuccess: () => void) =>
  useMutation({
    mutationFn: (body: IBookmark) => createBookmark(body),
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries({ queryKey: [BOOKMARKS] });
    },
  });

export default useCreateBookmark;
