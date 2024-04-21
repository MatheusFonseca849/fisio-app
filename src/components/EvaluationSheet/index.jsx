import ExamContainer from "../ExamContainer/index.jsx";
import Header from "../Header/header.js";
import EvaluationHeaderForm from "../EvaluationHeaderForm/index.jsx";
import FormField from "../FormField/index.jsx";
import StyledEvaluationSheet from "./evaluationSheet.js";
import FormSubfield from "../FormSubfield/index.jsx";
import InputContainer from "../InputContainer/index.jsx";
import SubmitButton from "../SubmitButton/index.jsx";
import SelectInput from "../SelectInput/index.jsx";

const EvaluationSheet = () => {
  return (
    <>
      <Header>
        <h1>Ficha de Avaliação</h1>
      </Header>
      <StyledEvaluationSheet>
        <EvaluationHeaderForm>
          <div className="headerForm_column">
            <InputContainer
              id={"ID"}
              labelText={"ID"}
              inputType={"text"}
              placeholder={"Insira o ID"}
            />
            <InputContainer
              id={"date"}
              labelText={"Data:"}
              inputType={"date"}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"name"}
              labelText={"Nome:"}
              placeholder={"Insira o nome do paciente"}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"poplitealAngle"}
              labelText={"Ângulo poplíteo"}
              inputType={"number"}
            />
            <span>°</span>

            <SelectInput
              id={"tat_perimetry"}
              labelText={"Perimetria TAT"}
              options={[
                {
                  text: "5cm",
                  value: 5,
                },
                {
                  text: "10cm",
                  value: 10,
                },
                {
                  text: "15cm",
                  value: 15,
                },
              ]}
            />
          </div>
        </EvaluationHeaderForm>
        <ExamContainer title={"Bipodal"}>
          <FormField title={"Olho Aberto"}>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"bipodal_eyesOpen_time_1"}
                labelText={"Tempo:"}
                inputType={"time"}
              />
              <InputContainer
                id={"bipodal_eyesOpen_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes..."}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"bipodal_eyesOpen_time_1"}
                labelText={"Tempo"}
                inputType={"time"}
              />
              <InputContainer
                id={"bipodal_eyesOpen_coments_2"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes..."}
                textArea={true}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Olho Fechado"}>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"bipodal_eyesClosed_time_1"}
                labelText={"Tempo:"}
                inputType={"time"}
              />
              <InputContainer
                id={"bipodal_eyesClosed_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"bipodal_eyesClosed_time_2"}
                labelText={"Tempo"}
                inputType={"time"}
              />
              <InputContainer
                id={"bipodal_eyesClosed_coments_2"}
                labelText={"Comentários"}
                placeholder={"Insira os comentários pertinentes"}
                textArea={true}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Unipodal"}>
          <FormField title={"Membro de Preferência:"}>
            <InputContainer
              id={"preferedMember_L"}
              labelText={"Esq."}
              inputType={"radio"}
              name={"preferedMember"}
              value={"L"}
            />
            <InputContainer
              id={"preferedMember_R"}
              labelText={"Dir."}
              inputType={"radio"}
              name={"preferedMember"}
              value={"R"}
            />
          </FormField>

          <FormField>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"unipodal_time_1"}
                labelText={"Tempo:"}
                inputType={"time"}
              />
              <InputContainer
                id={"unipodal_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"unipodal_time_2"}
                labelText={"Tempo:"}
                inputType={"time"}
              />
              <InputContainer
                id={"unipodal_coments_2"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                textArea={true}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Alcance Funcional - Membro Superior"}>
          <FormField title={"Direito"}>
            <InputContainer
              id={"upperMember_right_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"upperMember_right_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              id={"upperMember_right_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>

          <FormField title={"Esquerdo"}>
            <InputContainer
              id={"upperMember_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"upperMember_left_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              id={"upperMember_left_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Mobilidade de Tornozelo"}>
          <FormField title={"Direito"}>
            <InputContainer
              id={"ankleMobility_right_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"ankleMobility_right_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              id={"ankleMobility_right_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>

          <FormField title={"Esquerdo"}>
            <InputContainer
              id={"ankleMobility_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"ankleMobility_left_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              id={"ankleMobility_left_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Força Muscular"}>
          <FormField title={"MI Direito"}>
            <InputContainer
              id={"muscleStrenght_right_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"muscleStrenght_right_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              id={"muscleStrenght_right_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>

          <FormField title={"MI Esquerdo"}>
            <InputContainer
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Sentar e Levantar"}>
          <FormField title={"5 repetições seg."}>
            <InputContainer
              id={"upDown_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              id={"upDown_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              id={"upDown_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>
        </ExamContainer>

        <SubmitButton>Registrar Formulário</SubmitButton>
      </StyledEvaluationSheet>
    </>
  );
};

export default EvaluationSheet;
