import * as yup from "yup";

const requiredMessage = "Campo obrigatório";

export const socioFormSchema = yup.object({
  nome_paciente: yup
    .string()
    .matches(/(^[A-Za-z]+$)/, "Nome contém caracteres inválidos")
    .required(requiredMessage),
  ID_paciente: yup
    .number()
    .typeError("Deve ser um número")
    .required(requiredMessage),
  data_nascimento: yup
    .date()
    .typeError("Data inválida")
    .required(requiredMessage),
  idade_paciente: yup
    .number()
    .min(1)
    .typeError("Idade deve ser maior que 0")
    .max(120)
    .typeError("Idade alta demais")
    .required(requiredMessage),
  contato_paciente: yup
    .number()
    .typeError("Número inválido")
    .required(requiredMessage),
  peso_paciente: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  altura_paciente: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  imc_paciente: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  filiacao_paciente: yup
    .string()
    .matches(/(^[A-Za-z]+$)/, "Nome contém caracteres inválidos"),
  tempo_diagnostico: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  hemofilia_na_familia: yup
    .boolean()
    .typeError("Selecione um valor")
    .required(requiredMessage),
  etnia: yup
    .string()
    .matches(/([a - z])/, "Selecione um valor")
    .required(requiredMessage),
  estado_civil: yup.string().required(requiredMessage),
  escolaridade: yup.string().required(requiredMessage),
  atividade_laboral: yup.string().required(requiredMessage),
  estudante: yup.boolean().required(requiredMessage),
  plano_de_saude: yup.boolean().required(requiredMessage),
  auxilio_ou_aposentado: yup.boolean().required(requiredMessage),
  atividade_fisica: yup.boolean().required(requiredMessage),
  tipo_tratamento: yup.string().required(requiredMessage),
  desenvolveu_inibidores: yup.string().required(requiredMessage),
  doenca_cronica: yup.boolean().required(requiredMessage),
  ajuda_medica: yup.boolean().required(requiredMessage),
  motivo_nao_fisioterapia: yup.string().required(requiredMessage),
  medicamentos: yup.string(),
});

export const evaluationSheetSchema = yup.object({
  ID_paciente: yup
    .number()
    .typeError("Número inválido")
    .required(requiredMessage),
  data_avaliacao: yup
    .date()
    .typeError("Data inválida")
    .required(requiredMessage),
  nome_paciente: yup
    .string()
    .matches(/(^[A-Za-z]+$)/, "Nome contém caracteres inválidos")
    .required(requiredMessage),
  angulo_popliteo: yup
    .number()
    .typeError("Número inválido")
    .required(requiredMessage),
  perimetria_tat: yup
    .number()
    .typeError("Número inválido")
    .required(requiredMessage),
  bipodal_aberto_tempo1: yup
    .string()
    .matches(/(\d){2}:(\d){2}/, "Formato invalido")
    .required(requiredMessage),
  bipodal_aberto_comentario1: yup.string().required(requiredMessage),
  bipodal_aberto_tempo2: yup
    .string()
    .matches(/(\d){2}:(\d){2}/, "Formato inválido")
    .required(requiredMessage),
  bipodal_aberto_comentario2: yup.string().required(requiredMessage),
  bipodal_fechado_tempo1: yup
    .string()
    .matches(/(\d){2}:(\d){2}/)
    .required(requiredMessage),
  bipodal_fechado_comentario1: yup.string().required(requiredMessage),
  bipodal_fechado_tempo2: yup
    .string()
    .matches(/(\d){2}:(\d){2}/, "Formato Inválido")
    .required(requiredMessage),
  bipodal_fechado_comentario2: yup.string().required(requiredMessage),
  membro_preferencia: yup.string().required(requiredMessage),
  unipodal_tempo1: yup
    .string()
    .matches(/(\d){2}:(\d){2}/, "Formato Inválido")
    .required(requiredMessage),
  unipodal_comentario1: yup.string().required(requiredMessage),
  unipodal_tempo2: yup
    .string()
    .matches(/(\d){2}:(\d){2}/, "Formato inválido")
    .required(requiredMessage),
  unipodal_comentario2: yup.string().required(requiredMessage),
af_sup_dir1:yup.number().typeError("Valor inválido").required(requiredMessage),
af_sup_dir2:yup.number().typeError("Valor inválido").required(requiredMessage),
af_sup_dir3:yup.number().typeError("Valor inválido").required(requiredMessage),
af_sup_esq1:yup.number().typeError("Valor inválido").required(requiredMessage),
af_sup_esq2:yup.number().typeError("Valor inválido").required(requiredMessage),
af_sup_esq3:yup.number().typeError("Valor inválido").required(requiredMessage),
mob_tor_dir1:yup.number().typeError("Valor inválido").required(requiredMessage),
mob_tor_dir2:yup.number().typeError("Valor inválido").required(requiredMessage),
mob_tor_dir3:yup.number().typeError("Valor inválido").required(requiredMessage),
mob_tor_esq1:yup.number().typeError("Valor inválido").required(requiredMessage),
mob_tor_esq2:yup.number().typeError("Valor inválido").required(requiredMessage),
mob_tor_esq3:yup.number().typeError("Valor inválido").required(requiredMessage),
for_musc_dir1:yup.number().typeError("Valor inválido").required(requiredMessage),
for_musc_dir2:yup.number().typeError("Valor inválido").required(requiredMessage),
for_musc_dir3:yup.number().typeError("Valor inválido").required(requiredMessage),
for_musc_esq1:yup.number().typeError("Valor inválido").required(requiredMessage),
for_musc_esq2:yup.number().typeError("Valor inválido").required(requiredMessage),
for_musc_esq3:yup.number().typeError("Valor inválido").required(requiredMessage),
sentar_levantar1:yup.number().typeError("Valor inválido").required(requiredMessage),
sentar_levantar2:yup.number().typeError("Valor inválido").required(requiredMessage),
sentar_levantar3:yup.number().typeError("Valor inválido").required(requiredMessage),

});
