import * as yup from "yup";
const requiredMessage = "Campo obrigatório";

export const userRegisterSchema = yup.object({
  usuario_nome: yup.string().required(requiredMessage),
  usuario_email: yup
    .string()
    .email("formato de email inválido")
    .required(requiredMessage),

  usuario_senha: yup
    .string()
    .matches(/(\d)/, "Deve conter pelo menos um número")
    .matches(/([a - z])/, "Deve conter pelo menos uma letra minúscula")
    .matches(/([A - Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/(\W|_)/, "Deve conter pelo menos um caractere especial")
    .matches(/(.{8,})/, "Deve conter no mínimo 8 caracteres"),

  confirmacao_senha: yup
    .string()
    .oneOf(
      [yup.ref("senha")],
      "Campos Senha e Confirmação de Senha devem ser iguais"
    ),
});

export const userLoginSchema = yup.object({
  login: yup.string().email().required(requiredMessage),
  senha: yup
    .string()
    .matches(/(\d)/, "Deve conter pelo menos um número")
    .matches(/([a - z])/, "Deve conter pelo menos uma letra minúscula")
    .matches(/([A - Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/(\W|_)/, "Deve conter pelo menos um caractere especial")
    .matches(/(.{8,})/, "Deve conter no mínimo 8 caracteres")
    .required(requiredMessage),
});
