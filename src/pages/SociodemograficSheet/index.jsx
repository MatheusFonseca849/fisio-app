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

  return (
    <>
      <Header>
        <h1>Questionário Sociodemográfico</h1>
      </Header>
      <StyledSocioForm>
        <EvaluationHeaderForm>
          <div className="headerForm_column">
            <InputContainer
              id={"name"}
              labelText={"Nome:"}
              placeholder={"Nome do paciente"}
            />
            <InputContainer
              id={"id"}
              labelText={"ID:"}
              placeholder={"Insira o ID"}
              inputType={"number"}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"dateOfBirth"}
              labelText={"Data nascimento:"}
              inputType={"date"}
            />
            <InputContainer
              id={"age"}
              labelText={"Idade"}
              inputType={"number"}
            />
            <InputContainer id={"phoneNumber"} labelText={"Contato"} />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"weight"}
              labelText={"Peso:"}
              inputType={"number"}
            />
            <InputContainer
              id={"height"}
              labelText={"Altura:"}
              inputType={"number"}
            />
            <InputContainer
              id={"imc"}
              labelText={"IMC:"}
              inputType={"number"}
            />
          </div>

          <div className="headerForm_column"></div>
          <div className="headerForm_column">
            <InputContainer id={"affiliation"} labelText={"Afiliação:"} />
          </div>
        </EvaluationHeaderForm>

        <ExamContainer title={"Questionário"}>
          <InputContainer
            id={"timeOfDiagnosis"}
            labelText={"Tempo de diagnóstico (anos)"}
            labelSize={defaultLabelSize}
            inputType={"number"}
          />
          <SelectInput
            id={"hemophiliaInFamily"}
            labelText={"Ao nascer, já haviam casos de hemofilia na familia?"}
            labelSize={defaultLabelSize}
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
                value: "unknown",
              },
            ]}
          />
          <RadioInputContainer
            id={"ethnicity"}
            labelText={"Raça/cor"}
            labelSize={defaultLabelSize}
            optionSize={"18px"}
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
            options={[
              {
                value: "nao_recomendado",
                text: "Não foi recomendado"
              },
              {
                value: "nao_conseguiu_agendar",
                text: "Não consegui agendar pelo SUS"
              },
              {
                value: "medo_de_piorar",
                text:"Tive medo de piorar com as sessões"
              },
              {
                value: "sem_interesse",
                text: "Não tive interesse"
              }
            ]}
          />
          <InputContainer id={"medicamentos"} labelText={"Medicamentos:"} labelSize={defaultLabelSize}/>
          <SubmitButton>Enviar Formulário</SubmitButton>
        </ExamContainer>
      </StyledSocioForm>
    </>
  );
};

export default SociodemograficSheet;
