import * as yup from "yup";

const requiredMessage = "Campo obrigatório";

export const socioFormSchema = yup.object({
  nome_paciente: yup
    .string()
    .required(requiredMessage)
    .matches(/^[\w\s]+$/, "Nome contém caracteres inválidos"),
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
    .min(1, "Idade deve ser maior que 0")
    .max(120, "Idade alta demais").typeError("Valor inválido")
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
    .matches(/^[\w\s]+$/, "Nome contém caracteres inválidos"),
  tempo_diagnostico: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  hemofilia_na_familia: yup
    .string().matches(/(^[a-z]+$)/, "Valor inválido").required(requiredMessage),
  etnia: yup
    .string()
    .matches(/([a-z])/)
    .required(requiredMessage),
  estado_civil: yup.string().required(requiredMessage),
  escolaridade: yup.string().required(requiredMessage),
  atividade_laboral: yup.string().matches(/([a-zA-Z])/).required(requiredMessage),
  estudante: yup.string().matches(/([a-zA-Z]|)/, "Valor inválido").required(requiredMessage),
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
    .matches(/(^[\w\s]+$)/, "Nome contém caracteres inválidos")
    .required(requiredMessage),
  angulo_popliteo: yup
    .number()
    .typeError("Número inválido")
    .required(requiredMessage),
  perimetria_tat: yup
    .number()
    .required(requiredMessage)
    .typeError("Número inválido"),
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
    .matches(/(\d){2}:(\d){2}/, "Formato inválido")
    .required(requiredMessage),
  bipodal_fechado_comentario1: yup.string().required(requiredMessage),
  bipodal_fechado_tempo2: yup
    .string()
    .matches(/(\d){2}:(\d){2}/, "Formato inválido")
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
  af_sup_dir1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  af_sup_dir2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  af_sup_dir3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  af_sup_esq1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  af_sup_esq2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  af_sup_esq3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  mob_tor_dir1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  mob_tor_dir2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  mob_tor_dir3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  mob_tor_esq1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  mob_tor_esq2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  mob_tor_esq3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  for_musc_dir1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  for_musc_dir2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  for_musc_dir3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  for_musc_esq1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  for_musc_esq2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  for_musc_esq3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  sentar_levantar1: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  sentar_levantar2: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  sentar_levantar3: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
});

export const jointHealthSchema = yup.object({
  numero_avaliacao: yup.number().typeError("Valor inválido").required(requiredMessage),
  data_avaliacao: yup
    .date()
    .typeError("Data inválida")
    .required(requiredMessage),
  ID_paciente: yup.number().typeError("ID inválido").required(requiredMessage),
  nome_paciente: yup
    .string()
    .required(requiredMessage)
    .matches(/(^[\w\s]+$)/, "Caractere inválido detectado"),
  cot_esq_tipo_edema: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_ref_ossea: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_duracao_edema: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_cometarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_tipo_edema: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_ref_ossea: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_duracao_edema: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_tipo_edema: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_ref_ossea: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_duracao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_tipo_edema: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_ref_ossea: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_duracao_edema: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_tipo_edema: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_ref_ossea: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_duracao_edema: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_tipo_edema: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_ref_ossea: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_duracao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_am_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_am_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_am_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_am_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_am_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_am_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_am_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_am_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_am_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_am_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_am_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_am_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_crep_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_crep_gravidade: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_crep_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_crep_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_crep_gravidade: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_crep_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_crep_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_crep_gravidade: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_crep_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_crep_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_crep_gravidade: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_crep_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_crep_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_crep_gravidade: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_crep_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_crep_palpavel: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_crep_gravidade: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_crep_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_flexao_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_flexao_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_flexao_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_flexao_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_flexao_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_flexao_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_pe_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_ext_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_pe_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_ext_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_pe_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_pe_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_ext_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_pe_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_ext_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_pe_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_ext_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_pe_posicao: yup
    .string()
    .matches(/(^[ a-z ]+$)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_ext_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_dor_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  cot_esq_dor_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_dor_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  cot_dir_dor_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_dor_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  joe_esq_dor_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_dor_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  joe_dir_dor_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_dor_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  tor_esq_dor_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_dor_comentarios: yup
    .string()
    .matches(/(\w)/, "Valor inválido")
    .required(requiredMessage),
  tor_dir_dor_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_for_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_for_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_esq_for_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_for_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_for_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  cot_dir_for_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_for_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_for_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_esq_for_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_for_flexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_for_ext: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  joe_dir_for_pontuacao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_for_elev: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_for_flexaoPlantar: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_esq_for_dFlexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_for_elev: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_for_flexaoPlantar: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
  tor_dir_for_dFlexao: yup
    .number()
    .typeError("Valor inválido")
    .required(requiredMessage),
});