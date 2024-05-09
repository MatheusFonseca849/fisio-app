import * as yup from "yup";
const requiredMessage = "Campo obrigatório";

export const userRegisterSchema = yup.object({
  usuario_nome: yup.string().required(requiredMessage),
  usuario_email: yup
    .string()
    .email("formato de email inválido")
    .matches(/([a-z]|@|.)/, "Email contém caracteres inválidos")
    .required(requiredMessage),

  usuario_senha: yup
    .string()
    .required(requiredMessage)
    .matches(/([A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/([a-z])/, "Deve conter pelo menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter pelo menos um número")
    .matches(/(\W|_)/, "Deve conter pelo menos um caractere especial")
    .matches(/(.{8,})/, "Deve conter no mínimo 8 caracteres"),

  confirmacao_senha: yup
    .string()
    .required(requiredMessage)
    .oneOf(
      [yup.ref("senha")],
      "Campos Senha e Confirmação de Senha devem ser iguais"
    ),
});

export const userLoginSchema = yup.object({
  login: yup.string().email("Email inválido").required(requiredMessage),
  senha: yup
    .string()
    .required(requiredMessage)
    .matches(/([A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/([a-z])/, "Deve conter pelo menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter pelo menos um número")
    .matches(/(\W|_)/, "Deve conter pelo menos um caractere especial")
    .matches(/(.{8,})/, "Deve conter no mínimo 8 caracteres"),
});


