import { useContext } from "react";
import InputContainer from "../InputContainer";
import SubmitButton from "../SubmitButton";
import StyledRegisterForm from "./registerForm.js";
import { UserContext } from "../../providers/UserContext.jsx";

const RegisterForm = () => {

  const { register, handleSubmit } = useForm()

  const { registerUser } = useContext(UserContext)
  return (
    <StyledRegisterForm onSubmit={handleSubmit(registerUser)}>
      <div>
        <InputContainer
          id={"name"}
          labelText={"Nome:"}
          placeholder={"Insira seu nome"}
          labelSize={"24px"}
          {...register("usuario_nome")}
        />
        <InputContainer
          id={"email"}
          labelText={"Email:"}
          inputType={"email"}
          labelSize={"24px"}
          {...register("usuario_email")}
        />
        <InputContainer
          id={"password"}
          labelText={"Senha:"}
          inputType={"password"}
          labelSize={"24px"}
          {...register("usuario_senha")}
        />
        <InputContainer
          id={"confirmPassword"}
          labelText={"Confirme sua senha:"}
          inputType={"password"}
          labelSize={"24px"}
          {...register("confirmacao_senha")}
        />
      </div>
      <SubmitButton>Criar Cadastro</SubmitButton>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
