import { useForm } from "react-hook-form";

import StyledJointHealthSheet from "./jointHealthSheet.js";

import EvaluationHeaderForm from "../../components/EvaluationHeaderForm/index.jsx";
import ExamContainer from "../../components/ExamContainer/index.jsx";
import FormField from "../../components/FormField/index.jsx";
import FormSubfield from "../../components/FormSubfield/index.jsx";
import Header from "../../components/Header/index.jsx";
import InputContainer from "../../components/InputContainer/index.jsx";
import RadioInputContainer from "../../components/RadioInputContainer/index.jsx";
import SubmitButton from "../../components/SubmitButton/index.jsx";
import TextAreaInput from "../../components/TextAreaInput/index.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { jointHealthSchema } from "../../schemas/patientFormSchemas.js";

const JointHealthPage = () => {
  const defaultExamContainerSize = "1.5rem";
  const defaultFormFieldSize = "1.375rem";
  const defaultFormSubfieldSize = "1.25rem";
  const defaultInputSize = "1rem";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(jointHealthSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header>Saúde articular na Hemofilia</Header>
      <StyledJointHealthSheet
        title="Formulário de saúde articular"
        onSubmit={handleSubmit(submitForm)}
      >
        <EvaluationHeaderForm>
          <div className="headerForm_column">
            <InputContainer
              id={"numero_avaliacao"}
              labelText={"Nº avaliação"}
              labelSize={defaultInputSize}
              inputType="number"
              {...register("numero_avaliacao")}
              errorMessage={errors.numero_avaliacao?.message}
            />
            <InputContainer
              id={"data_avaliação"}
              labelText={"Data"}
              labelSize={defaultInputSize}
              inputType={"date"}
              {...register("data_avaliacao")}
              errorMessage={errors.data_avaliacao?.message}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"id_paciente"}
              labelText={"ID do paciente"}
              labelSize={defaultInputSize}
              inputType="number"
              {...register("ID_paciente")}
              errorMessage={errors.ID_paciente?.message}
            />
          </div>
          <div className="headerForm_column">
            <InputContainer
              {...register("nome_paciente")}
              errorMessage={errors.nome_paciente?.message}
              id={"nome_paciente"}
              labelText={"Nome do paciente"}
              labelSize={defaultInputSize}
            />
          </div>
        </EvaluationHeaderForm>

        <ExamContainer title={"Edema"} titleSize={defaultExamContainerSize}>
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                {...register("cot_esq_tipo_edema")}
                errorMessage={errors.cot_esq_tipo_edema?.message}
                id={"cotEsquerdo_tipoEdema"}
                labelText={"Tipo de edêma:"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "nenhum",
                    label: "N",
                    title: "Nenhum",
                  },
                  {
                    value: "inchado",
                    label: "I",
                    title: "Inchado",
                  },
                  {
                    value: "esponjoso",
                    label: "E",
                    title: "Esponjoso",
                  },
                  {
                    value: "tenso",
                    label: "T",
                    title: "Tenso",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("cot_esq_ref_ossea")}
                errorMessage={errors.cot_esq_ref_ossea?.message}
                id={"cotEsquerdo_pts_referenciaOssea"}
                labelText={"Pontos referência óssea:"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "visiveis",
                    label: "V",
                    title: "Visíveis",
                  },
                  {
                    value: "parcialmente_visiveis",
                    label: "PV",
                    title: "Parcialmente Visíveis",
                  },
                  {
                    value: "nao_visivel",
                    label: "NV",
                    title: "Não Visível",
                  },
                ]}
              />

              <RadioInputContainer
                {...register("cot_esq_palpavel")}
                errorMessage={errors.cot_esq_palpavel?.message}
                id={"cotEsquerdo_palpavel"}
                labelText={"Palpável:"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "P",
                    title: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "NP",
                    title: "Não Palpável",
                  },
                ]}
              />

              <InputContainer
                {...register("cot_esq_pontuacao")}
                errorMessage={errors.cot_esq_pontuacao?.message}
                id={"cotEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType="number"
              />
              <InputContainer
                {...register("cot_esq_duracao_edema")}
                errorMessage={errors.cot_esq_duracao_edema?.message}
                id={"cotEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                labelSize={defaultInputSize}
                inputType="number"
              />
              <TextAreaInput
                {...register("cot_esq_cometarios")}
                errorMessage={errors.cot_esq_cometarios?.message}
                id={"cotEsquerdo_comentarios"}
                labelText={"Comentários:"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                {...register("cot_dir_tipo_edema")}
                errorMessage={errors.cot_dir_tipo_edema?.message}
                id={"cotDireito_tipoEdema"}
                labelText={"Tipo de edêma:"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "nenhum",
                    label: "N",
                    title: "Nenhum",
                  },
                  {
                    value: "inchado",
                    label: "I",
                    title: "Inchado",
                  },
                  {
                    value: "esponjoso",
                    label: "E",
                    title: "Esponjoso",
                  },
                  {
                    value: "tenso",
                    label: "T",
                    title: "Tenso",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("cot_dir_ref_ossea")}
                errorMessage={errors.cot_dir_ref_ossea?.message}
                id={"cotDireito_pts_referenciaOssea"}
                labelText={"Pontos referência óssea:"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "visiveis",
                    label: "V",
                    title: "Visíveis",
                  },
                  {
                    value: "parcialmente_visiveis",
                    label: "PV",
                    title: "Parcialmente Visíveis",
                  },
                  {
                    value: "nao_visivel",
                    label: "NV",
                    title: "Não Visível",
                  },
                ]}
              />

              <RadioInputContainer
                {...register("cot_dir_palpavel")}
                errorMessage={errors.cot_dir_palpavel?.message}
                id={"cotDireito_palpavel"}
                labelText={"Palpável:"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "P",
                    title: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "NP",
                    title: "Não Palpável",
                  },
                ]}
              />

              <InputContainer
                {...register("cot_dir_pontuacao")}
                errorMessage={errors.cot_dir_pontuacao?.message}
                id={"cotDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("cot_dir_duracao_edema")}
                errorMessage={errors.cot_dir_duracao_edema?.message}
                id={"cotDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("cot_dir_comentarios")}
                errorMessage={errors.cot_dir_comentarios?.message}
                id={"cotDireito_comentarios"}
                labelText={"Comentários:"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                {...register("joe_esq_tipo_edema")}
                errorMessage={errors.joe_esq_tipo_edema?.message}
                id={"joelhoEsquerdo_tipoEdema"}
                labelText={"Tipo de edêma:"}
                options={[
                  {
                    value: "nenhum",
                    label: "N",
                    title: "Nenhum",
                  },
                  {
                    value: "inchado",
                    label: "I",
                    title: "Inchado",
                  },
                  {
                    value: "esponjoso",
                    label: "E",
                    title: "Esponjoso",
                  },
                  {
                    value: "tenso",
                    label: "T",
                    title: "Tenso",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("joe_esq_ref_ossea")}
                errorMessage={errors.joe_esq_ref_ossea?.message}
                id={"joelhoEsquerdo_pts_referenciaOssea"}
                labelText={"Pontos referência óssea:"}
                options={[
                  {
                    value: "visiveis",
                    label: "V",
                    title: "Visíveis",
                  },
                  {
                    value: "parcialmente_visiveis",
                    label: "PV",
                    title: "Parcialmente Visíveis",
                  },
                  {
                    value: "nao_visivel",
                    label: "NV",
                    title: "Não Visível",
                  },
                ]}
              />

              <RadioInputContainer
                {...register("joe_esq_palpavel")}
                errorMessage={errors.joe_esq_palpavel?.message}
                id={"joelhoEsquerdo_palpavel"}
                labelText={"Palpável:"}
                options={[
                  {
                    value: "palpavel",
                    label: "P",
                    title: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "NP",
                    title: "Não Palpável",
                  },
                ]}
              />

              <InputContainer
                {...register("joe_esq_pontuacao")}
                errorMessage={errors.joe_esq_pontuacao?.message}
                id={"joelhoEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("joe_esq_duracao")}
                errorMessage={errors.joe_esq_duracao?.message}
                id={"joelhoEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("joe_esq_comentarios")}
                errorMessage={errors.joe_esq_comentarios?.message}
                id={"joelhoEsquerdo_comentarios"}
                labelText={"Comentários:"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                {...register("joe_dir_tipo_edema")}
                errorMessage={errors.joe_dir_tipo_edema?.message}
                id={"joelhoDireito_tipoEdema"}
                labelText={"Tipo de edêma:"}
                options={[
                  {
                    value: "nenhum",
                    label: "N",
                    title: "Nenhum",
                  },
                  {
                    value: "inchado",
                    label: "I",
                    title: "Inchado",
                  },
                  {
                    value: "esponjoso",
                    label: "E",
                    title: "Esponjoso",
                  },
                  {
                    value: "tenso",
                    label: "T",
                    title: "Tenso",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("joe_dir_ref_ossea")}
                errorMessage={errors.joe_dir_ref_ossea?.message}
                id={"joelhoDireito_pts_referenciaOssea"}
                labelText={"Pontos referência óssea:"}
                options={[
                  {
                    value: "visiveis",
                    label: "V",
                    title: "Visíveis",
                  },
                  {
                    value: "parcialmente_visiveis",
                    label: "PV",
                    title: "Parcialmente Visíveis",
                  },
                  {
                    value: "nao_visivel",
                    label: "NV",
                    title: "Não Visível",
                  },
                ]}
              />

              <RadioInputContainer
                {...register("joe_dir_palpavel")}
                errorMessage={errors.joe_dir_palpavel?.message}
                id={"joelhoDireito_palpavel"}
                labelText={"Palpável:"}
                options={[
                  {
                    value: "palpavel",
                    label: "P",
                    title: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "NP",
                    title: "Não Palpável",
                  },
                ]}
              />

              <InputContainer
                {...register("joe_dir_pontuacao")}
                errorMessage={errors.joe_dir_pontuacao?.message}
                id={"joelhoDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("joe_dir_duracao_edema")}
                errorMessage={errors.joe_dir_duracao_edema?.message}
                id={"joelhoDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("joe_dir_comentarios")}
                errorMessage={errors.joe_dir_comentarios?.message}
                id={"joelhoDireito_comentarios"}
                labelText={"Comentários:"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                {...register("tor_esq_tipo_edema")}
                errorMessage={errors.tor_esq_tipo_edema?.message}
                id={"tornEsquerdo_tipoEdema"}
                labelText={"Tipo de edêma:"}
                options={[
                  {
                    value: "nenhum",
                    label: "N",
                    title: "Nenhum",
                  },
                  {
                    value: "inchado",
                    label: "I",
                    title: "Inchado",
                  },
                  {
                    value: "esponjoso",
                    label: "E",
                    title: "Esponjoso",
                  },
                  {
                    value: "tenso",
                    label: "T",
                    title: "Tenso",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("tor_esq_ref_ossea")}
                errorMessage={errors.tor_esq_ref_ossea?.message}
                id={"tornEsquerdo_pts_referenciaOssea"}
                labelText={"Pontos referência óssea:"}
                options={[
                  {
                    value: "visiveis",
                    label: "V",
                    title: "Visíveis",
                  },
                  {
                    value: "parcialmente_visiveis",
                    label: "PV",
                    title: "Parcialmente Visíveis",
                  },
                  {
                    value: "nao_visivel",
                    label: "NV",
                    title: "Não Visível",
                  },
                ]}
              />

              <RadioInputContainer
                {...register("tor_esq_palpavel")}
                errorMessage={errors.tor_esq_palpavel?.message}
                id={"tornEsquerdo_palpavel"}
                labelText={"Palpável:"}
                options={[
                  {
                    value: "palpavel",
                    label: "P",
                    title: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "NP",
                    title: "Não Palpável",
                  },
                ]}
              />

              <InputContainer
                {...register("tor_esq_pontuacao")}
                errorMessage={errors.tor_esq_pontuacao?.message}
                id={"tornEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("tor_esq_duracao_edema")}
                errorMessage={errors.tor_esq_duracao_edema?.message}
                id={"tornEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("tor_esq_comentarios")}
                errorMessage={errors.tor_esq_comentarios?.message}
                id={"tornEsquerdo_comentarios"}
                labelText={"Comentários:"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                {...register("tor_dir_tipo_edema")}
                errorMessage={errors.tor_dir_tipo_edema?.message}
                id={"tornDireito_tipoEdema"}
                labelText={"Tipo de edêma:"}
                options={[
                  {
                    value: "nenhum",
                    label: "N",
                    title: "Nenhum",
                  },
                  {
                    value: "inchado",
                    label: "I",
                    title: "Inchado",
                  },
                  {
                    value: "esponjoso",
                    label: "E",
                    title: "Esponjoso",
                  },
                  {
                    value: "tenso",
                    label: "T",
                    title: "Tenso",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("tor_dir_ref_ossea")}
                errorMessage={errors.tor_dir_ref_ossea?.message}
                id={"tornDireito_pts_referenciaOssea"}
                labelText={"Pontos referência óssea:"}
                options={[
                  {
                    value: "visiveis",
                    label: "V",
                    title: "Visíveis",
                  },
                  {
                    value: "parcialmente_visiveis",
                    label: "PV",
                    title: "Parcialmente Visíveis",
                  },
                  {
                    value: "nao_visivel",
                    label: "NV",
                    title: "Não Visível",
                  },
                ]}
              />

              <RadioInputContainer
                {...register("tor_dir_palpavel")}
                errorMessage={errors.tor_dir_palpavel?.message}
                id={"tornDireito_palpavel"}
                labelText={"Palpável:"}
                options={[
                  {
                    value: "palpavel",
                    label: "P",
                    title: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "NP",
                    title: "Não Palpável",
                  },
                ]}
              />

              <InputContainer
                {...register("tor_dir_pontuacao")}
                errorMessage={errors.tor_dir_pontuacao?.message}
                id={"tornDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("tor_dir_duracao")}
                errorMessage={errors.tor_dir_duracao?.message}
                id={"tornDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("tor_dir_comentarios")}
                errorMessage={errors.tor_dir_comentarios?.message}
                id={"tornDireito_comentarios"}
                labelText={"Comentários:"}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer
          title={"Atrofia Muscular"}
          titleSize={defaultExamContainerSize}
        >
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                {...register("cot_esq_am_pontuacao")}
                errorMessage={errors.cot_esq_am_pontuacao?.message}
                id={"cotEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("cot_esq_am_comentarios")}
                errorMessage={errors.cot_esq_am_comentarios?.message}
                id={"cotEsquerdo_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                {...register("cot_dir_am_pontuacao")}
                errorMessage={errors.cot_dir_am_pontuacao?.message}
                id={"cotDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("cot_dir_am_comentarios")}
                errorMessage={errors.cot_dir_am_comentarios?.message}
                id={"cotDireito_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                {...register("joe_esq_am_pontuacao")}
                errorMessage={errors.joe_esq_am_pontuacao?.message}
                id={"joelhoEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("joe_esq_am_comentarios")}
                errorMessage={errors.joe_esq_am_comentarios?.message}
                id={"joelhoEsquerdo_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                {...register("joe_dir_am_pontuacao")}
                errorMessage={errors.joe_dir_am_pontuacao?.message}
                id={"joelhoDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("joe_dir_am_comentarios")}
                errorMessage={errors.joe_dir_am_comentarios?.message}
                id={"joelhoDireito_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                {...register("tor_esq_am_pontuacao")}
                errorMessage={errors.tor_esq_am_pontuacao?.message}
                id={"torEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("tor_esq_am_comentarios")}
                errorMessage={errors.tor_esq_am_comentarios?.message}
                id={"torEsquerdo_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                {...register("tor_dir_am_pontuacao")}
                errorMessage={errors.tor_dir_am_pontuacao?.message}
                id={"torDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("tor_dir_am_comentarios")}
                errorMessage={errors.tor_dir_am_comentarios?.message}
                id={"torDireito_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer
          title={"Crepitação de Motimento"}
          titleSize={defaultExamContainerSize}
        >
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <RadioInputContainer
                {...register("cot_esq_crep_palpavel")}
                errorMessage={errors.cot_esq_crep_palpavel?.message}
                id={"cotEsquerdo_crepitacao_palpavel"}
                labelText={"Palpável?"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "Não Palpável",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("cot_esq_crep_gravidade")}
                errorMessage={errors.cot_esq_crep_gravidade?.message}
                id={"cotEsquerdo_crepitacao_gravidade"}
                labelText={"Gravidade"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "leve",
                    label: "L",
                  },
                  {
                    value: "grave",
                    label: "G",
                  },
                  {
                    value: "n/a",
                    label: "N/A",
                  },
                ]}
              />
              <InputContainer
                {...register("cot_esq_crep_pontuacao")}
                errorMessage={errors.cot_esq_crep_pontuacao?.message}
                id={"cotEsquerdo_crepitacao_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <RadioInputContainer
                {...register("cot_dir_crep_palpavel")}
                errorMessage={errors.cot_dir_crep_palpavel?.message}
                id={"cotDireito_crepitacao_palpavel"}
                labelText={"Palpável?"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "Não Palpável",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("cot_dir_crep_gravidade")}
                errorMessage={errors.cot_dir_crep_gravidade?.message}
                id={"cotDireito_crepitacao_gravidade"}
                labelText={"Gravidade"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "leve",
                    label: "L",
                  },
                  {
                    value: "grave",
                    label: "G",
                  },
                  {
                    value: "n/a",
                    label: "N/A",
                  },
                ]}
              />
              <InputContainer
                {...register("cot_dir_crep_pontuacao")}
                errorMessage={errors.cot_dir_crep_pontuacao?.message}
                id={"cotDireito_crepitacao_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <RadioInputContainer
                {...register("joe_esq_crep_palpavel")}
                errorMessage={errors.joe_esq_crep_palpavel?.message}
                id={"joelhoEsquerdo_crepitacao_palpavel"}
                labelText={"Palpável?"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "Não Palpável",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("joe_esq_crep_gravidade")}
                errorMessage={errors.joe_esq_crep_gravidade?.message}
                id={"joelhoEsquerdo_crepitacao_gravidade"}
                labelText={"Gravidade"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "leve",
                    label: "L",
                  },
                  {
                    value: "grave",
                    label: "G",
                  },
                  {
                    value: "n/a",
                    label: "N/A",
                  },
                ]}
              />
              <InputContainer
                {...register("joe_esq_crep_pontuacao")}
                errorMessage={errors.joe_esq_crep_pontuacao?.message}
                id={"joelhoEsquerdo_crepitacao_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <RadioInputContainer
                {...register("joe_dir_crep_palpavel")}
                errorMessage={errors.joe_dir_crep_palpavel?.message}
                id={"joelhoDireito_crepitacao_palpavel"}
                labelText={"Palpável?"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "Não Palpável",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("joe_dir_crep_gravidade")}
                errorMessage={errors.joe_dir_crep_gravidade?.message}
                id={"joelhoDireito_crepitacao_gravidade"}
                labelText={"Gravidade"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "leve",
                    label: "L",
                  },
                  {
                    value: "grave",
                    label: "G",
                  },
                  {
                    value: "n/a",
                    label: "N/A",
                  },
                ]}
              />
              <InputContainer
                {...register("joe_dir_crep_pontuacao")}
                errorMessage={errors.joe_dir_crep_pontuacao?.message}
                id={"joelhoDireito_crepitacao_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <RadioInputContainer
                {...register("tor_esq_crep_palpavel")}
                errorMessage={errors.tor_esq_crep_palpavel?.message}
                id={"torEsquerdo_crepitacao_palpavel"}
                labelText={"Palpável?"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "Não Palpável",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("tor_esq_crep_gravidade")}
                errorMessage={errors.tor_esq_crep_gravidade?.message}
                id={"torEsquerdo_crepitacao_gravidade"}
                labelText={"Gravidade"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "leve",
                    label: "L",
                  },
                  {
                    value: "grave",
                    label: "G",
                  },
                  {
                    value: "n/a",
                    label: "N/A",
                  },
                ]}
              />
              <InputContainer
                {...register("tor_esq_crep_pontuacao")}
                errorMessage={errors.tor_esq_crep_pontuacao?.message}
                id={"torEsquerdo_crepitacao_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
                labelSize={defaultInputSize}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <RadioInputContainer
                {...register("tor_dir_crep_palpavel")}
                errorMessage={errors.tor_dir_crep_palpavel?.message}
                id={"torDireito_crepitacao_palpavel"}
                labelText={"Palpável?"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "palpavel",
                    label: "Palpável",
                  },
                  {
                    value: "nao_palpavel",
                    label: "Não Palpável",
                  },
                ]}
              />
              <RadioInputContainer
                {...register("tor_dir_crep_gravidade")}
                errorMessage={errors.tor_dir_crep_gravidade?.message}
                id={"torDireito_crepitacao_gravidade"}
                labelText={"Gravidade"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "leve",
                    label: "L",
                  },
                  {
                    value: "grave",
                    label: "G",
                  },
                  {
                    value: "n/a",
                    label: "N/A",
                  },
                ]}
              />
              <InputContainer
                {...register("tor_dir_crep_pontuacao")}
                errorMessage={errors.tor_dir_crep_pontuacao?.message}
                id={"torDireito_crepitacao_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer
          title={"Perda de Flexão"}
          titleSize={defaultExamContainerSize}
        >
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("cot_esq_flexao")}
                errorMessage={errors.cot_esq_flexao?.message}
                id={"cotEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_esq_posicao")}
                errorMessage={errors.cot_esq_posicao?.message}
                id={"cotEsquerdo_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("cot_esq_flexao_pontuacao")}
                errorMessage={errors.cot_esq_flexao_pontuacao?.message}
                id={"cotEsquerdo_pontuacao_perdaFlexao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("cot_dir_flexao")}
                errorMessage={errors.cot_dir_flexao?.message}
                id={"cotDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_dir_posicao")}
                errorMessage={errors.cot_dir_posicao?.message}
                id={"cotDireito_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("cot_dir_flexao_pontuacao")}
                errorMessage={errors.cot_dir_flexao_pontuacao?.message}
                id={"cotDireito_pontuacao_perdaFlexao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("joe_esq_flexao")}
                errorMessage={errors.joe_esq_flexao?.message}
                id={"joelhoEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_esq_posicao")}
                errorMessage={errors.joe_esq_posicao?.message}
                id={"joelhoEsquerdo_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("joe_esq_flexao_pontuacao")}
                errorMessage={errors.joe_esq_flexao_pontuacao?.message}
                id={"joelhoEsquerdo_pontuacao_perdaFlexao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("joe_dir_flexao")}
                errorMessage={errors.joe_dir_flexao?.message}
                id={"joelhoDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_dir_posicao")}
                errorMessage={errors.joe_dir_posicao?.message}
                id={"joelhoDireito_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("joe_dir_flexao_pontuacao")}
                errorMessage={errors.joe_dir_flexao_pontuacao?.message}
                id={"joelhoDireito_pontuacao_perdaFlexao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("tor_esq_flexao")}
                errorMessage={errors.tor_esq_flexao?.message}
                id={"torEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_esq_posicao")}
                errorMessage={errors.tor_esq_posicao?.message}
                id={"torEsquerdo_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("tor_esq_flexao_pontuacao")}
                errorMessage={errors.tor_esq_flexao_pontuacao?.message}
                id={"torEsquerdo_pontuacao_perdaFlexao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("tor_dir_flexao")}
                errorMessage={errors.tor_dir_flexao?.message}
                id={"torDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_dir_posicao")}
                errorMessage={errors.tor_dir_posicao?.message}
                id={"torDireito_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("tor_dir_flexao_pontuacao")}
                errorMessage={errors.tor_dir_flexao_pontuacao?.message}
                id={"torDireito_pontuacao_perdaFlexao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer
          title={"Perda de Extensão"}
          titleSize={defaultExamContainerSize}
        >
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("cot_esq_ext")}
                errorMessage={errors.cot_esq_ext?.message}
                id={"cotEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_esq_pe_posicao")}
                errorMessage={errors.cot_esq_pe_posicao?.message}
                id={"cotEsquerdo_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("cot_esq_ext_pontuacao")}
                errorMessage={errors.cot_esq_ext_pontuacao?.message}
                id={"cotEsquerdo_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("cot_dir_ext")}
                errorMessage={errors.cot_dir_ext?.message}
                id={"cotDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_dir_pe_posicao")}
                errorMessage={errors.cot_dir_pe_posicao?.message}
                id={"cotDireito_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("cot_dir_ext_pontuacao")}
                errorMessage={errors.cot_dir_ext_pontuacao?.message}
                id={"cotDireito_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("joe_esq_pe_ext")}
                errorMessage={errors.joe_esq_pe_ext?.message}
                id={"joelhoEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_esq_posicao")}
                errorMessage={errors.joe_esq_posicao?.message}
                id={"joelhoEsquerdo_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("joe_esq_ext_pontuacao")}
                errorMessage={errors.joe_esq_ext_pontuacao?.message}
                id={"joelhoEsquerdo_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("joe_dir_ext")}
                errorMessage={errors.joe_dir_ext?.message}
                id={"joelhoDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_dir_pe_posicao")}
                errorMessage={errors.joe_dir_pe_posicao?.message}
                id={"joelhoDireito_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("joe_dir_ext_pontuacao")}
                errorMessage={errors.joe_dir_ext_pontuacao?.message}
                id={"joelhoDireito_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("tor_esq_ext")}
                errorMessage={errors.tor_esq_ext?.message}
                id={"torEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_esq_pe_posicao")}
                errorMessage={errors.tor_esq_pe_posicao?.message}
                id={"torEsquerdo_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("tor_esq_ext_pontuacao")}
                errorMessage={errors.tor_esq_ext_pontuacao?.message}
                id={"torEsquerdo_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("tor_dir_ext")}
                errorMessage={errors.tor_dir_ext?.message}
                id={"torDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_dir_pe_posicao")}
                errorMessage={errors.tor_dir_pe_posicao?.message}
                id={"torDireito_posicao"}
                labelText={"Medido em posição"}
                labelSize={defaultInputSize}
                options={[
                  {
                    value: "supino",
                    label: "Supino",
                  },
                  {
                    value: "sentado",
                    label: "Sentado",
                  },
                ]}
              />
              <InputContainer
                {...register("tor_dir_ext_pontuacao")}
                errorMessage={errors.tor_dir_ext_pontuacao?.message}
                id={"torDireito_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer
          title={"Dor Articular"}
          titleSize={defaultExamContainerSize}
        >
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <TextAreaInput
                {...register("cot_esq_dor_comentarios")}
                errorMessage={errors.cot_esq_dor_comentarios?.message}
                id={"cotEsquerdo_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_esq_dor_pontuacao")}
                errorMessage={errors.cot_esq_dor_pontuacao?.message}
                id={"cotEsquerdo_dor_articular_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <TextAreaInput
                {...register("cot_dir_dor_comentarios")}
                errorMessage={errors.cot_dir_dor_comentarios?.message}
                id={"cotDireito_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_dir_dor_pontuacao")}
                errorMessage={errors.cot_dir_dor_pontuacao?.message}
                id={"cotDireito_dor_articular_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <TextAreaInput
                {...register("joe_esq_dor_comentarios")}
                errorMessage={errors.joe_esq_dor_comentarios?.message}
                id={"joelhoEsquerdo_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_esq_dor_pontuacao")}
                errorMessage={errors.joe_esq_dor_pontuacao?.message}
                id={"joelhoEsquerdo_dor_articular_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <TextAreaInput
                {...register("joe_dir_dor_comentarios")}
                errorMessage={errors.joe_dir_dor_comentarios?.message}
                id={"joelhoDireito_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_dir_dor_pontuacao")}
                errorMessage={errors.joe_dir_dor_pontuacao?.message}
                id={"joelhoDireito_dor_articular_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <TextAreaInput
                {...register("tor_esq_dor_comentarios")}
                errorMessage={errors.tor_esq_dor_comentarios?.message}
                id={"torEsquerdo_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("tor_esq_dor_pontuacao")}
                errorMessage={errors.tor_esq_dor_pontuacao?.message}
                id={"torEsquerdo_dor_articular_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <TextAreaInput
                {...register("tor_dir_dor_comentarios")}
                errorMessage={errors.tor_dir_dor_comentarios?.message}
                id={"torDireito_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("tor_dir_dor_pontuacao")}
                errorMessage={errors.tor_dir_dor_pontuacao?.message}
                id={"torDireito_dor_articular_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Força"} titleSize={defaultExamContainerSize}>
          <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("cot_esq_for_flexao")}
                errorMessage={errors.cot_esq_for_flexao?.message}
                id={"cotEsquerdo_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("cot_esq_for_ext")}
                errorMessage={errors.cot_esq_for_ext?.message}
                id={"cotEsquerdo_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_esq_for_pontuacao")}
                errorMessage={errors.cot_esq_for_pontuacao?.message}
                id={"cotEsquerdo_forca_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("cot_dir_for_flexao")}
                errorMessage={errors.cot_dir_for_flexao?.message}
                id={"cotDireito_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("cot_dir_for_ext")}
                errorMessage={errors.cot_dir_for_ext?.message}
                id={"cotDireito_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_dir_for_pontuacao")}
                errorMessage={errors.cot_dir_for_pontuacao?.message}
                id={"cotDireito_forca_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("joe_esq_for_flexao")}
                errorMessage={errors.joe_esq_for_flexao?.message}
                id={"joelhoEsquerdo_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("joe_esq_for_ext")}
                errorMessage={errors.joe_esq_for_ext?.message}
                id={"joelhoEsquerdo_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_esq_for_pontuacao")}
                errorMessage={errors.joe_esq_for_pontuacao?.message}
                id={"joelhoEsquerdo_forca_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("joe_dir_for_flexao")}
                errorMessage={errors.joe_dir_for_flexao?.message}
                id={"joelhoDireito_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("joe_dir_for_ext")}
                errorMessage={errors.joe_dir_for_ext?.message}
                id={"joelhoDireito_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_dir_for_pontuacao")}
                errorMessage={errors.joe_dir_for_pontuacao?.message}
                id={"joelhoDireito_forca_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
              />
            </FormSubfield>
          </FormField>

          <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
            <FormSubfield
              title={"Esquerdo"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("tor_esq_for_elev")}
                errorMessage={errors.tor_esq_for_elev?.message}
                id={"torEsquerdo_forca_elevacoes"}
                labelText={"Nº de elevações do calcanhar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_esq_for_flexaoPlantar")}
                errorMessage={errors.tor_esq_for_flexaoPlantar?.message}
                id={"torEsquerdo_forca_flexaoPlantar"}
                labelText={"Flexão Plantar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_esq_for_dFlexao")}
                errorMessage={errors.tor_esq_for_dFlexao?.message}
                id={"torEsquerdo_forca_dorsiflexao"}
                labelText={"Dorsiflexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation={"column"}
            >
              <InputContainer
                {...register("tor_dir_for_elev")}
                errorMessage={errors.tor_dir_for_elev?.message}
                id={"torDireito_forca_elevacoes"}
                labelText={"Nº de elevações do calcanhar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_dir_for_flexaoPlantar")}
                errorMessage={errors.tor_dir_for_flexaoPlantar?.message}
                id={"torDireito_forca_flexaoPlantar"}
                labelText={"Flexão Plantar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_dir_for_dFlexao")}
                errorMessage={errors.tor_dir_for_dFlexao?.message}
                id={"torDireito_forca_dorsiflexao"}
                labelText={"Dorsiflexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>
        <SubmitButton>Enviar Formulário</SubmitButton>
      </StyledJointHealthSheet>
    </>
  );
};

export default JointHealthPage;
