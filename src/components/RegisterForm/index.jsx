import { useContext } from "react";
import InputContainer from "../InputContainer";
import SubmitButton from "../SubmitButton";
import StyledRegisterForm from "./registerForm.js";
import { UserContext } from "../../providers/UserContext.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "../../schemas/userSchemas.js";



const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const { registerUser } = useContext(UserContext);

  const defaultLabelSize = "22px";

  return (
    <StyledRegisterForm onSubmit={handleSubmit(registerUser)}>
      <div>
        <InputContainer
          id={"name"}
          labelText={"Nome:"}
          placeholder={"Insira seu nome"}
          labelSize={defaultLabelSize}
          errorMessage={errors.usuario_nome?.message}
          {...register("usuario_nome")}
        />
        <InputContainer
          id={"email"}
          labelText={"Email:"}
          inputType={"email"}
          labelSize={defaultLabelSize}
          errorMessage={errors.usuario_email?.message}
          {...register("usuario_email")}
        />
        <InputContainer
          id={"password"}
          labelText={"Senha:"}
          inputType={"password"}
          labelSize={defaultLabelSize}
          errorMessage={errors.usuario_senha?.message}
          {...register("usuario_senha")}
        />
        <InputContainer
          id={"confirmPassword"}
          labelText={"Confirme sua senha:"}
          inputType={"password"}
          labelSize={defaultLabelSize}
          errorMessage={errors.confirmacao_senha?.message}
          {...register("confirmacao_senha")}
        />
      </div>
      <SubmitButton>Criar Cadastro</SubmitButton>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
