import ExamContainer from "../../components/ExamContainer/index.jsx";
import Header from "../../components/Header";
import EvaluationHeaderForm from "../../components/EvaluationHeaderForm/index.jsx";
import FormField from "../../components/FormField/index.jsx";
import StyledEvaluationSheet from "./evaluationSheet.js";
import FormSubfield from "../../components/FormSubfield/index.jsx";
import InputContainer from "../../components/InputContainer/index.jsx";
import SubmitButton from "../../components/SubmitButton/index.jsx";
import SelectInput from "../../components/SelectInput/index.jsx";

import RadioInputContainer from "../../components/RadioInputContainer/index.jsx";
import TextAreaInput from "../../components/TextAreaInput/index.jsx";
import { useForm } from "react-hook-form";

const EvaluationSheet = () => {
 
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header>
        <h1>Ficha de Avaliação</h1>
      </Header>
      <StyledEvaluationSheet onSubmit={handleSubmit(submitForm)}>
        <EvaluationHeaderForm>
          <div className="headerForm_column">
            <InputContainer
              id={"ID"}
              labelText={"ID"}
              inputType={"text"}
              placeholder={"Insira o ID"}
              {...register("ID_paciente")}
            />
            <InputContainer
              id={"date"}
              labelText={"Data:"}
              inputType={"date"}
              {...register("data_avaliacao")}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"name"}
              labelText={"Nome:"}
              placeholder={"Insira o nome do paciente"}
              {...register("nome_paciente")}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"poplitealAngle"}
              labelText={"Ângulo poplíteo"}
              inputType={"number"}
              {...register("angulo_popliteo")}
            />
            <span>°</span>

            <SelectInput
              id={"tat_perimetry"}
              labelText={"Perimetria TAT"}
              {...register("perimetria_tat")}
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
                {...register("bipodal_aberto_tempo1")}
              />
              <TextAreaInput
                id={"bipodal_eyesOpen_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes..."}
                {...register("bipodal_aberto_comentario1")}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"bipodal_eyesOpen_time_2"}
                labelText={"Tempo"}
                inputType={"time"}
                {...register("bipodal_aberto_tempo2")}
              />
              <TextAreaInput
                id={"bipodal_eyesOpen_coments_2"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes..."}
                {...register("bipodal_aberto_comentario2")}
                
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Olho Fechado"}>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"bipodal_eyesClosed_time_1"}
                labelText={"Tempo:"}
                inputType={"time"}
                {...register("bipodal_fechado_tempo1")}
              />
              <TextAreaInput
                id={"bipodal_eyesClosed_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("bipodal_fechado_comentario1")}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"bipodal_eyesClosed_time_2"}
                labelText={"Tempo"}
                inputType={"time"}
                {...register("bipodal_fechado_tempo2")}
              />
              <TextAreaInput
                id={"bipodal_fechado_comentario2"}
                labelText={"Comentários"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("bipodal_fechado_comentario2")}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Unipodal"}>
          <FormSubfield>
            
            <RadioInputContainer
              id={"membro_preferencia"}
              labelText={"Membro de preferência"}
              labelSize={"16px"}
              options={[
                {
                  title: 'esquerdo',
                  value: 'esquerdo',
                  label: 'Esq'
                },
                {
                  title: 'Direito',
                  value: 'direito',
                  label: 'Dir'
                }
              ]}
              {...register("membro_preferencia")}
            />
          </FormSubfield>

          <FormField>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"unipodal_time_1"}
                labelText={"Tempo:"}
                inputType={"time"}
                {...register("unipodal_tempo1")}
              />
              <TextAreaInput
                id={"unipodal_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("unipodal_comentario1")}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"unipodal_time_2"}
                labelText={"Tempo:"}
                inputType={"time"}
                {...register("unipodal_tempo2")}
              />
              <TextAreaInput
                id={"unipodal_coments_2"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("unipodal_comentario2")}
               
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
              {...register("af_sup_dir")}
            />
            <InputContainer
              id={"upperMember_right_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("af_sup_dir")}
            />
            <InputContainer
              id={"upperMember_right_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("af_sup_dir")}
            />
          </FormField>

          <FormField title={"Esquerdo"}>
            <InputContainer
              id={"upperMember_left_1"}
              labelText={"1"}
              inputType={"number"}
              {...register("af_sup_esq")}
            />
            <InputContainer
              id={"upperMember_left_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("af_sup_esq")}
            />
            <InputContainer
              id={"upperMember_left_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("af_sup_esq")}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Mobilidade de Tornozelo"}>
          <FormField title={"Direito"}>
            <InputContainer
              id={"ankleMobility_right_1"}
              labelText={"1"}
              inputType={"number"}
              {...register("mob_tor_dir1")}
            />
            <InputContainer
              id={"ankleMobility_right_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("mob_tor_dir2")}
              />
            <InputContainer
              id={"ankleMobility_right_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("mob_tor_dir3")}
            />
          </FormField>

          <FormField title={"Esquerdo"}>
            <InputContainer
              id={"ankleMobility_left_1"}
              labelText={"1"}
              inputType={"number"}
              {...register("mob_tor_esq1")}
            />
            <InputContainer
              id={"ankleMobility_left_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("mob_tor_esq2")}
            />
            <InputContainer
              id={"ankleMobility_left_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("mob_tor_esq3")}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Força Muscular"}>
          <FormField title={"MI Direito"}>
            <InputContainer
              {...register("for_musc_dir1")}
              id={"muscleStrenght_right_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_dir2")}
              id={"muscleStrenght_right_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_dir3")}
              id={"muscleStrenght_right_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>

          <FormField title={"MI Esquerdo"}>
            <InputContainer
              {...register("for_musc_esq1")}
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_esq2")}
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_esq3")}
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Sentar e Levantar"}>
          <FormField title={"5 repetições seg."}>
            <InputContainer
              {...register("sentar_levantar1")}
              id={"upDown_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("sentar_levantar2")}
              id={"upDown_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              {...register("sentar_levantar3")}
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
