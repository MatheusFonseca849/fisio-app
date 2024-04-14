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
          labelSize={"24px"}
        />

        <InputContainer
          id={"password"}
          labelText={"Senha:"}
          inputType={"password"}
          placeholder={"Insira sua senha"}
          labelSize={"24px"}
        />
      </div>

      <SubmitButton>Fazer Login</SubmitButton>
    </StyledLoginForm>
  );
};

export default LoginForm;
