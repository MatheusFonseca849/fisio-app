import { useContext } from "react";
import { FormContext } from "../../providers/FormContext.jsx";
import EvaluationHeaderForm from "../../components/EvaluationHeaderForm";
import ExamContainer from "../../components/ExamContainer";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";
import RadioInputContainer from "../../components/RadioInputContainer";
import SelectInput from "../../components/SelectInput";
import SubmitButton from "../../components/SubmitButton";
import StyledSocioForm from "./sociodemograficSheet.js";

const SociodemograficSheet = () => {
  const defaultLabelSize = "16px";
  const defaultOptionSize = "16px";

  const { socioFormRegister } = useContext(FormContext);
  const { register, handleSubmit } = socioFormRegister;

  const submitForm = (data) => {
    console.log(data);
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
            />
            <InputContainer
              id={"id"}
              labelText={"ID:"}
              placeholder={"Insira o ID"}
              inputType={"number"}
              {...register("ID_paciente")}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"dateOfBirth"}
              labelText={"Data nascimento:"}
              inputType={"date"}
              {...register("data_nascimento")}
            />
            <InputContainer
              id={"age"}
              labelText={"Idade"}
              inputType={"number"}
              {...register("idade_paciente")}
            />
            <InputContainer
              id={"phoneNumber"}
              labelText={"Contato"}
              {...register("contato_paciente")}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"weight"}
              labelText={"Peso:"}
              inputType={"number"}
              {...register("peso_paciente")}
            />
            <InputContainer
              id={"height"}
              labelText={"Altura:"}
              inputType={"number"}
              {...register("altura_paciente")}
            />
            <InputContainer
              id={"imc"}
              labelText={"IMC:"}
              inputType={"number"}
              {...register("imc_paciente")}
            />
          </div>

          <div className="headerForm_column"></div>
          <div className="headerForm_column">
            <InputContainer
              id={"affiliation"}
              labelText={"Afiliação:"}
              {...register("filiacao_paciente")}
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
          />
          <SelectInput
            id={"hemophiliaInFamily"}
            labelText={"Ao nascer, já haviam casos de hemofilia na familia?"}
            labelSize={defaultLabelSize}
            {...register("hemofilia_na_familia")}
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
          />
          <SubmitButton>Enviar Formulário</SubmitButton>
        </ExamContainer>
      </StyledSocioForm>
    </>
  );
};

export default SociodemograficSheet;
