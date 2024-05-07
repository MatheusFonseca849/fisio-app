import { useForm } from "react-hook-form";
import EvaluationHeaderForm from "../../components/EvaluationHeaderForm";
import ExamContainer from "../../components/ExamContainer";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";
import RadioInputContainer from "../../components/RadioInputContainer";
import SelectInput from "../../components/SelectInput";
import SubmitButton from "../../components/SubmitButton";
import StyledSocioForm from "./sociodemograficSheet.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { socioFormSchema } from "../../schemas/patientFormSchemas.js";




const SociodemograficSheet = () => {
  const defaultLabelSize = "16px";
  const defaultOptionSize = "16px";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(socioFormSchema),
  });

  const submitForm = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <>
      <Header>
        <h1>Questionário Sociodemográfico</h1>
      </Header>
      <StyledSocioForm onSubmit={handleSubmit(submitForm)}>
        <EvaluationHeaderForm>
          <div className="headerForm_column">
            <InputContainer
              id={"name"}
              labelText={"Nome:"}
              placeholder={"Nome do paciente"}
              {...register("nome_paciente")}
              errorMessage={errors.nome_paciente?.message}
            />
            <InputContainer
              id={"id"}
              labelText={"ID:"}
              placeholder={"Insira o ID"}
              inputType={"number"}
              {...register("ID_paciente")}
              errorMessage={errors.ID_paciente?.message}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"dateOfBirth"}
              labelText={"Data nascimento:"}
              inputType={"date"}
              {...register("data_nascimento")}
              errorMessage={errors.data_nascimento?.message}
            />
            <InputContainer
              id={"age"}
              labelText={"Idade"}
              inputType={"number"}
              {...register("idade_paciente")}
              errorMessage={errors.idade_paciente?.message}
            />
            <InputContainer
              id={"phoneNumber"}
              labelText={"Contato"}
              {...register("contato_paciente")}
              errorMessage={errors.contato_paciente?.message}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"weight"}
              labelText={"Peso:"}
              inputType={"number"}
              steps={"any"}
              {...register("peso_paciente")}
              errorMessage={errors.peso_paciente?.message}
            />
            <InputContainer
              id={"height"}
              labelText={"Altura:"}
              inputType={"number"}
              steps={"any"}
              {...register("altura_paciente")}
              errorMessage={errors.altura_paciente?.message}
            />
            <InputContainer
              id={"imc"}
              labelText={"IMC:"}
              inputType={"number"}
              {...register("imc_paciente")}
              errorMessage={errors.imc_paciente?.message}
            />
          </div>

          <div className="headerForm_column"></div>
          <div className="headerForm_column">
            <InputContainer
              id={"affiliation"}
              labelText={"Afiliação:"}
              {...register("filiacao_paciente")}
              errorMessage={errors.filiacao_paciente?.message}
            />
          </div>
        </EvaluationHeaderForm>

        <ExamContainer title={"Questionário"}>
          <InputContainer
            id={"timeOfDiagnosis"}
            labelText={"Tempo de diagnóstico (anos)"}
            labelSize={defaultLabelSize}
            inputType={"number"}
            {...register("tempo_diagnostico")}
            errorMessage={errors.tempo_diagnostico?.message}
          />
          <SelectInput
            id={"hemophiliaInFamily"}
            labelText={"Ao nascer, já haviam casos de hemofilia na familia?"}
            labelSize={defaultLabelSize}
            {...register("hemofilia_na_familia")}
            errorMessage={errors.hemofilia_na_familia?.message}
            options={[
              {
                text: "Sim",
                value: true,
              },
              {
                text: "Não",
                value: false,
              },
              {
                text: "Não sabe",
                value: undefined,
              },
            ]}
          />
          <RadioInputContainer
            id={"ethnicity"}
            labelText={"Raça/cor"}
            labelSize={defaultLabelSize}
            optionSize={"18px"}
            {...register("etnia")}
            errorMessage={errors.etnia?.message}
            options={[
              {
                value: "branco",
                label: "Branco",
              },
              {
                value: "negro",
                label: "Negro",
              },
              {
                value: "pardo",
                label: "Pardo",
              },
            ]}
          />

          <SelectInput
            id={"maritalStatus"}
            labelText={"Estado Civil"}
            labelSize={defaultLabelSize}
            {...register("estado_civil")}
            errorMessage={errors.estado_civil?.message}
            options={[
              {
                value: "solteiro",
                text: "Solteiro",
              },
              {
                value: "casado",
                text: "Casado",
              },
              {
                value: "divorciado",
                text: "Divorciado",
              },
              {
                value: "viuvo_viuva",
                text: "Viuvo(a)",
              },
              {
                value: "outro",
                text: "Outro",
              },
            ]}
          />
          <SelectInput
            id={"educationLevel"}
            labelText={"Escolaridade"}
            labelSize={defaultLabelSize}
            optionSize={defaultOptionSize}
            {...register("escolaridade")}
            errorMessage={errors.escolaridade?.message}
            options={[
              {
                value: "nao_frequentou",
                text: "Nunca frequentou a escola",
              },
              {
                value: "fundamental_incompleto",
                text: "Ensino Fundamental Incompleto",
              },
              {
                value: "fundamental_completo",
                text: "Ensino Fundamental Completo",
              },
              {
                value: "medio_incompleto",
                text: "Ensino Médio Incompleto",
              },
              {
                value: "medio_completo",
                text: "Ensino Médio Completo",
              },
              {
                value: "superior_incompleto",
                text: "Ensino Superior Incompleto",
              },
              {
                value: "superior_completo",
                text: "Ensino Superior Completo",
              },
              {
                value: "pos_graduacao",
                text: "Pós Graduação",
              },
            ]}
          />

          <RadioInputContainer
            id={"workingNow"}
            labelText={"Exerce atividade laboral?"}
            labelSize={defaultLabelSize}
            {...register("atividade_laboral")}
            errorMessage={errors.atividade_laboral?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
              {
                value: undefined,
                label: "Não se aplica",
              },
            ]}
          />

          <RadioInputContainer
            id={"student"}
            labelText={"Estudante?"}
            labelSize={defaultLabelSize}
            {...register("estudante")}
            errorMessage={errors.estudante?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
              {
                value: undefined,
                label: "Não se aplica",
              },
            ]}
          />

          <RadioInputContainer
            id={"healthInsurance"}
            labelText={"Possuí plano de saúde?"}
            {...register("plano_de_saude")}
            errorMessage={errors.plano_de_saude?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}
          />

          <RadioInputContainer
            id={"retired"}
            labelText={"Possuí auxílio ou aposentadoria por doença?"}
            {...register("auxilio_ou_aposentado")}
            errorMessage={errors.auxilio_ou_aposentado?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}
          />

          <RadioInputContainer
            id={"phisicallyActive"}
            labelText={"Pratica atividade física?"}
            {...register("atividade_fisica")}
            errorMessage={errors.atividade_fisica?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}

            // Colocar input condicional para phisicallYActive == true (ver formulário no email)
          />

          <SelectInput
            id={"typeOfTreatment"}
            labelText={"Tipo de tratamento"}
            labelSize={defaultLabelSize}
            {...register("tipo_tratamento")}
            errorMessage={errors.tipo_tratamento?.message}
            options={[
              {
                value: "demanda",
                text: "Demanda",
              },
              {
                value: "profilaxia_primaria",
                text: "Profilaxia Prmária",
              },
              {
                value: "profilaxia_secundaria_curta",
                text: "Profilaxia Secundária Curta Duração",
              },
              {
                value: "profilaxia_secundaria_longa",
                text: "Profilaxia Secundária Longa Duração",
              },
              {
                value: "profilaxia_terciaria",
                text: "Profilaxia Terciária",
              },
              {
                value: "profilaxia_intermitente",
                text: "Profilaxia Intermitente",
              },
            ]}
          />

          <RadioInputContainer
            id={"inibidores"}
            labelText={"Desenvolveu inibidores"}
            labelSize={defaultLabelSize}
            optionSize={defaultOptionSize}
            {...register("desenvolveu_inibidores")}
            errorMessage={errors.desenvolveu_inibidores?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}
          />

          <RadioInputContainer
            id={"doenca_cronica"}
            labelText={"Tem alguma doença crônica?"}
            labelSize={defaultLabelSize}
            optionSize={defaultOptionSize}
            {...register("doenca_cronica")}
            errorMessage={errors.doenca_cronica?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}
          />
          <RadioInputContainer
            id={"ajuda_medica_12_meses"}
            labelText={
              "Procurou ajuda médica por outro problema além da Hemofilía nos últimos 12 meses"
            }
            labelSize={defaultLabelSize}
            optionSize={defaultOptionSize}
            {...register("ajuda_medica")}
            errorMessage={errors.ajuda_medica?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}
          />
          <RadioInputContainer
            id={"fisioterapia_12_meses"}
            labelText={"Nos últimos 12 meses, fez sessão de Fisioterapia?"}
            labelSize={defaultLabelSize}
            optionSize={defaultOptionSize}
            {...register("fez_fisioterapia")}
            errorMessage={errors.fez_fisioterapia?.message}
            options={[
              {
                value: true,
                label: "Sim",
              },
              {
                value: false,
                label: "Não",
              },
            ]}
          />
          <SelectInput
            id={"motivo_fisioterapia_12_meses"}
            labelText={"Se não, qual motivo:"}
            labelSize={defaultLabelSize}
            optionSize={defaultOptionSize}
            {...register("motivo_nao_fisioterapia")}
            errorMessage={errors.motivo_nao_fisioterapia?.message}
            options={[
              {
                value: "nao_recomendado",
                text: "Não foi recomendado",
              },
              {
                value: "nao_conseguiu_agendar",
                text: "Não consegui agendar pelo SUS",
              },
              {
                value: "medo_de_piorar",
                text: "Tive medo de piorar com as sessões",
              },
              {
                value: "sem_interesse",
                text: "Não tive interesse",
              },
            ]}
          />
          <InputContainer
            id={"medicamentos"}
            labelText={"Medicamentos:"}
            labelSize={defaultLabelSize}
            {...register("medicamentos")}
            errorMessage={errors.medicamentos?.message}
          />
          <SubmitButton>Enviar Formulário</SubmitButton>
        </ExamContainer>
      </StyledSocioForm>
    </>
  );
};

export default SociodemograficSheet;
