import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { loginMutation } from "@/services/mutation";
import FormContainer from "../ui/forms/FormContainer";
import { Button, Label } from "@windmill/react-ui";
import InputField from "../ui/input/InputField";
import { Spinners } from "../ui/icons/Spinners";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LoginParams } from "@/utils/types";
import { loginSchema } from "@/services/validationSchema";
import axios from "axios";

function LoginForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginParams>({ resolver: zodResolver(loginSchema) });

  const { mutateAsync, isPending, isSuccess, isError } = loginMutation();
  const { VITE_API_URL_DEV } = import.meta.env;
  const onSubmit = async (data: LoginParams) => {
    try {
      axios.post(`${VITE_API_URL_DEV}/login`, data, { withCredentials: true })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // await mutateAsync(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <FormContainer title={t("login")} onSubmit={handleSubmit(onSubmit)}>
      <Label className="mt-4">
        <span>{t("email")}</span>
        <InputField
          title="Email"
          name="email"
          register={register}
          typeInput="email"
          error={errors.email?.message}
          className="my-custom-class"
          aria-required="true"
        />
      </Label>

      <Label className="mt-4">
        <span>{t("password")}</span>
        <InputField
          title="Password"
          name="password"
          register={register}
          typeInput="password"
          error={errors.password?.message}
          className="my-custom-class"
          aria-required="true"
        />
      </Label>

      <Button type="submit" className="mt-4" block iconRight={isPending ? Spinners : undefined} disabled={!isValid}>
        Log in
      </Button>

      <hr className="my-8" />

      <Button block layout="outline">
        <FaGithub className="w-4 h-4 mr-2" aria-hidden="true" />
        Github
      </Button>
      <Button className="mt-4" block layout="outline">
        <FaTwitter className="w-4 h-4 mr-2" aria-hidden="true" />
        Twitter
      </Button>

      <p className="mt-4">
        <Link
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          to="/auth/forgot-password"
        >
          Forgot your password?
        </Link>
      </p>
      <p className="mt-1">
        <Link className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/auth/register">
          Create account
        </Link>
      </p>
    </FormContainer>
  );
}

export default LoginForm;
