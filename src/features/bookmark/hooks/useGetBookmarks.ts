import { useQuery } from "@tanstack/react-query";
import { BOOKMARKS } from "../api/queryKeys";
import { useAuthState } from "@/features/auth/context/AuthContext";
import { getUserBookmarks } from "../api/bookmark";

const useGetBookmarks = () => {
  const { user } = useAuthState();
  return useQuery({
    queryKey: [BOOKMARKS, user?.id],
    queryFn: () =>
      getUserBookmarks({
        userId: user?.id as number,
      }),
    enabled: !!user,
  });
};

export default useGetBookmarks;
