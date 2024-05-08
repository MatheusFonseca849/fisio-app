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
import { yupResolver } from "@hookform/resolvers/yup";
import { evaluationSheetSchema } from "../../schemas/patientFormSchemas.js";
// import Chronometer from "../../components/Chronometer/index.jsx";

const EvaluationSheet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(evaluationSheetSchema),
  });

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
              errorMessage={errors.ID_paciente?.message}
            />
            <InputContainer
              id={"date"}
              labelText={"Data:"}
              inputType={"date"}
              {...register("data_avaliacao")}
              errorMessage={errors.data_avaliacao?.message}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"name"}
              labelText={"Nome:"}
              placeholder={"Insira o nome do paciente"}
              {...register("nome_paciente")}
              errorMessage={errors.nome_paciente?.message}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"poplitealAngle"}
              labelText={"Ângulo poplíteo"}
              inputType={"number"}
              {...register("angulo_popliteo")}
              errorMessage={errors.angulo_popliteo?.message}
            />
            <span>°</span>

            <SelectInput
              id={"tat_perimetry"}
              labelText={"Perimetria TAT"}
              {...register("perimetria_tat")}
              errorMessage={errors.perimetria_tat?.message}
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
                labelText={"Tempo:"}
                {...register("bipodal_aberto_tempo1")}
                errorMessage={errors.bipodal_aberto_tempo1?.message}
              />
              <TextAreaInput
                id={"bipodal_eyesOpen_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes..."}
                {...register("bipodal_aberto_comentario1")}
                errorMessage={errors.bipodal_aberto_comentario1?.message}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"bipodal_eyesOpen_time_2"}
                labelText={"Tempo"}
                {...register("bipodal_aberto_tempo2")}
                errorMessage={errors.bipodal_aberto_tempo2?.message}
              />
              <TextAreaInput
                id={"bipodal_eyesOpen_coments_2"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes..."}
                {...register("bipodal_aberto_comentario2")}
                errorMessage={errors.bipodal_aberto_comentario2?.message}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Olho Fechado"}>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"bipodal_eyesClosed_time_1"}
                labelText={"Tempo:"}
                {...register("bipodal_fechado_tempo1")}
                errorMessage={errors.bipodal_fechado_tempo1?.message}
              />
              <TextAreaInput
                id={"bipodal_eyesClosed_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("bipodal_fechado_comentario1")}
                errorMessage={errors.bipodal_fechado_comentario1?.message}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"bipodal_eyesClosed_time_2"}
                labelText={"Tempo"}
                {...register("bipodal_fechado_tempo2")}
                errorMessage={errors.bipodal_fechado_tempo2?.message}
              />
              <TextAreaInput
                id={"bipodal_fechado_comentario2"}
                labelText={"Comentários"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("bipodal_fechado_comentario2")}
                errorMessage={errors.bipodal_fechado_comentario2?.message}
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
              {...register("membro_preferencia")}
              errorMessage={errors.membro_preferencia?.message}
              options={[
                {
                  title: "Esquerdo",
                  value: "esquerdo",
                  label: "Esq",
                },
                {
                  title: "Direito",
                  value: "direito",
                  label: "Dir",
                },
              ]}
            />
          </FormSubfield>

          <FormField>
            <FormSubfield title={"1"}>
              <InputContainer
                id={"unipodal_time_1"}
                labelText={"Tempo:"}
                inputType={"time"}
                {...register("unipodal_tempo1")}
                errorMessage={errors.unipodal_tempo1?.message}
              />
              <TextAreaInput
                id={"unipodal_coments_1"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("unipodal_comentario1")}
                errorMessage={errors.unipodal_comentario1?.message}
              />
            </FormSubfield>

            <FormSubfield title={"2"}>
              <InputContainer
                id={"unipodal_time_2"}
                labelText={"Tempo:"}
                inputType={"time"}
                {...register("unipodal_tempo2")}
                errorMessage={errors.unipodal_tempo2?.message}
              />
              <TextAreaInput
                id={"unipodal_coments_2"}
                labelText={"Comentários:"}
                placeholder={"Insira os comentários pertinentes"}
                {...register("unipodal_comentario2")}
                errorMessage={errors.unipodal_comentario2?.message}
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
              {...register("af_sup_dir1")}
              errorMessage={errors.af_sup_dir1?.message}
            />
            <InputContainer
              id={"upperMember_right_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("af_sup_dir2")}
              errorMessage={errors.af_sup_dir2?.message}
            />
            <InputContainer
              id={"upperMember_right_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("af_sup_dir3")}
              errorMessage={errors.af_sup_dir3?.message}
            />
          </FormField>

          <FormField title={"Esquerdo"}>
            <InputContainer
              id={"upperMember_left_1"}
              labelText={"1"}
              inputType={"number"}
              {...register("af_sup_esq1")}
              errorMessage={errors.af_sup_esq1?.message}
            />
            <InputContainer
              id={"upperMember_left_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("af_sup_esq2")}
              errorMessage={errors.af_sup_esq2?.message}
            />
            <InputContainer
              id={"upperMember_left_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("af_sup_esq3")}
              errorMessage={errors.af_sup_esq3?.message}
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
              errorMessage={errors.mob_tor_dir1?.message}
            />
            <InputContainer
              id={"ankleMobility_right_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("mob_tor_dir2")}
              errorMessage={errors.mob_tor_dir2?.message}
            />
            <InputContainer
              id={"ankleMobility_right_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("mob_tor_dir3")}
              errorMessage={errors.mob_tor_dir3?.message}
            />
          </FormField>

          <FormField title={"Esquerdo"}>
            <InputContainer
              id={"ankleMobility_left_1"}
              labelText={"1"}
              inputType={"number"}
              {...register("mob_tor_esq1")}
              errorMessage={errors.mob_tor_esq1?.message}
            />
            <InputContainer
              id={"ankleMobility_left_2"}
              labelText={"2"}
              inputType={"number"}
              {...register("mob_tor_esq2")}
              errorMessage={errors.mob_tor_esq2?.message}
            />
            <InputContainer
              id={"ankleMobility_left_3"}
              labelText={"3"}
              inputType={"number"}
              {...register("mob_tor_esq3")}
              errorMessage={errors.mob_tor_esq3?.message}
            />
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Força Muscular"}>
          <FormField title={"MI Direito"}>
            <InputContainer
              {...register("for_musc_dir1")}
              errorMessage={errors.for_musc_dir1?.message}
              id={"muscleStrenght_right_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_dir2")}
              errorMessage={errors.for_musc_dir2?.message}
              id={"muscleStrenght_right_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_dir3")}
              errorMessage={errors.for_musc_dir3?.message}
              id={"muscleStrenght_right_3"}
              labelText={"3"}
              inputType={"number"}
            />
          </FormField>

          <FormField title={"MI Esquerdo"}>
            <InputContainer
              {...register("for_musc_esq1")}
              errorMessage={errors.for_musc_esq1?.message}
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_esq2")}
              errorMessage={errors.for_musc_esq2?.message}
              id={"muscleStrenght_left_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("for_musc_esq3")}
              errorMessage={errors.for_musc_esq3?.message}
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
              errorMessage={errors.sentar_levantar1?.message}
              id={"upDown_1"}
              labelText={"1"}
              inputType={"number"}
            />
            <InputContainer
              {...register("sentar_levantar2")}
              errorMessage={errors.sentar_levantar2?.message}
              id={"upDown_2"}
              labelText={"2"}
              inputType={"number"}
            />
            <InputContainer
              {...register("sentar_levantar3")}
              errorMessage={errors.sentar_levantar3?.message}
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
