import { User } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUserAPI } from "../../services/apis";

export function useAuth() {
  const controller = new AbortController();

  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["fetchAuthUser"],
    queryFn: async () => {
      const response = await getUserAPI();
      return response.data;
    },
    refetchOnMount: false,
  });

  useEffect(() => {
    // if (user) dispatch(updateUserInfo(user));

    return () => {
      controller.abort();
    };
  }, [user]);

  return { user, isLoading };
}