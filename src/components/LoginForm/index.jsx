import InputContainer from "../InputContainer";
import SubmitButton from "../SubmitButton/index.jsx";
import StyledLoginForm from "./loginForm.js";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  const {register, handleSubmit} = useForm()

  const loginUser = (data) => {
    console.log(data)
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit(loginUser)}>
      <div>
        <InputContainer
          id={"user"}
          labelText={"Usuário:"}
          inputType={"email"}
          placeholder={"Insira seu e-mail"}
          labelSize={"24px"}
          {...register("login")}
        />

        <InputContainer
          id={"password"}
          labelText={"Senha:"}
          inputType={"password"}
          placeholder={"Insira sua senha"}
          labelSize={"24px"}
          {...register("password")}
        />
      </div>

      <SubmitButton>Fazer Login</SubmitButton>
    </StyledLoginForm>
  );
};

export default LoginForm;
