import InputContainer from "../InputContainer";
import SubmitButton from "../SubmitButton";
import StyledRegisterForm from "./registerForm.js";

const RegisterForm = () => {
  return (
    <StyledRegisterForm>
      <div>
        <InputContainer
          id={"name"}
          labelText={"Nome:"}
          placeholder={"Insira seu nome"}
          labelSize={"24px"}
        />
        <InputContainer
          id={"email"}
          labelText={"Email:"}
          inputType={"email"}
          labelSize={"24px"}
        />
        <InputContainer
          id={"password"}
          labelText={"Senha:"}
          inputType={"password"}
          labelSize={"24px"}
        />
        <InputContainer
          id={"confirmPassword"}
          labelText={"Confirme sua senha:"}
          inputType={"password"}
          labelSize={"24px"}
        />
      </div>
      <SubmitButton>Criar Cadastro</SubmitButton>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
