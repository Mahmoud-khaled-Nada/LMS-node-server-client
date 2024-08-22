/* eslint-disable react-hooks/rules-of-hooks */
import { postLoginUserAPI } from "@/services/apis";
import { LoginParams } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

// http://localhost:8000/api/login
export function loginMutation() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginParams) => postLoginUserAPI(data),
    onSuccess({ data }) {
      console.log(data);
      navigate("");
    },
    onError: (err: AxiosError) => {
      console.log(err);
    },
  });
}
