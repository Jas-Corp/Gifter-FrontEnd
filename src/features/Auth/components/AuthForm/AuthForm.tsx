import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import FormWrapper from "@/form/FormWrapper/FormWrapper";
import Input from "@/form/Input/Input";
import useRequest from "@/hooks/useRequest";
import Button from "@/ui/Button/Button";
import ErrorElement from "@/ui/ErrorElement/ErrorElement";
import formEventToJsonInputData from "@/utils/formEventToJsonInputData";
import isValidConnectionInfo from "@/utils/validators/user/isValidConnectionInfo";

import useAuth from "../../hooks/useAuth";
import registerRequest from "../../services/registerRequest";
import signinRequest from "../../services/signinRequest";
import { connectionInfo } from "../../types/User";

import styles from "./AuthForm.module.scss";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get("type") === "register";

  const { makeRequest, loading, error } = useRequest();
  const { login } = useAuth();
  const [inputError, setInputError] = useState<string | null>(null);

  const navigate = useNavigate();

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setInputError(null);
    const data = formEventToJsonInputData(e) as connectionInfo;
    const isValidInfo = isValidConnectionInfo(data);
    if (isValidInfo != true) return setInputError(isValidInfo);
    const request = isRegister ? registerRequest : signinRequest;
    const response = await makeRequest(() => request(data));
    if (response && response.ok) {
      login(data.email);
      navigate("/");
    }
  };

  return (
    <FormWrapper onSubmit={formHandler}>
      <h2 className={styles.title}>👋 Welcome {isRegister ? "" : "Back"}</h2>
      <p className={styles.description}>
        Find the perfect Christmas gift in a snap on our site! Choose from a
        wide range of personalized options to delight your loved ones. 🎄🎁
      </p>
      <ErrorElement message={error?.message} />
      <ErrorElement message={inputError} />
      <Input placeholder="Your beautiful mail" name="email" required />
      <Input
        placeholder="A very sure password"
        name="password"
        type="password"
        required
      />
      <Button disabled={loading}>{isRegister ? "Register" : "Login"}</Button>
      <Link
        to={`/auth?type=${isRegister ? "login" : "register"}`}
        className={styles.link}
      >
        {!isRegister
          ? "Don't have an account yet ?"
          : "Already have an account ?"}
      </Link>
    </FormWrapper>
  );
};
export default AuthForm;
