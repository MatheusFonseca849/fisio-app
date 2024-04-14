import InputContainer from "../InputContainer";
import SubmitButton from "../SubmitButton/index.jsx";
import StyledLoginForm from "./loginForm.js";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <div>
        <InputContainer
          id={"user"}
          labelText={"Usuário:"}
          inputType={"email"}
          placeholder={"Insira seu e-mail"}
        />

        <InputContainer
          id={"password"}
          labelText={"Senha:"}
          inputType={"password"}
          placeholder={"Insira sua senha"}
        />
      </div>

      <SubmitButton>Fazer Login</SubmitButton>
    </StyledLoginForm>
  );
};

export default LoginForm;
