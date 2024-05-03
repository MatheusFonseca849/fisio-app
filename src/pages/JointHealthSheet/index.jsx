import { useContext } from "react";
import { FormContext } from "../../providers/FormContext.jsx";
import EvaluationHeaderForm from "../../components/EvaluationHeaderForm/index.jsx";
import ExamContainer from "../../components/ExamContainer/index.jsx";
import FormField from "../../components/FormField/index.jsx";
import FormSubfield from "../../components/FormSubfield/index.jsx";
import Header from "../../components/Header/index.jsx";
import InputContainer from "../../components/InputContainer/index.jsx";
import RadioInputContainer from "../../components/RadioInputContainer/index.jsx";
import SubmitButton from "../../components/SubmitButton/index.jsx";
import StyledJointHealthSheet from "./jointHealthSheet.js";
import TextAreaInput from "../../components/TextAreaInput/index.jsx";

const JointHealthPage = () => {
  const defaultExamContainerSize = "1.5rem";
  const defaultFormFieldSize = "1.375rem";
  const defaultFormSubfieldSize = "1.25rem";
  const defaultInputSize = "1rem";

  const { jointHealthRegister } = useContext(FormContext);
  const { register, handleSubmit } = jointHealthRegister;

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header>
        <h1>Saúde articular na Hemofilia</h1>
      </Header>
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
            />
            <InputContainer
              id={"data_avaliação"}
              labelText={"Data"}
              labelSize={defaultInputSize}
              inputType={"date"}
              {...register("etnia_paciente")}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"id_paciente"}
              labelText={"ID do paciente"}
              labelSize={defaultInputSize}
              inputType="number"
              {...register("ID_paciente")}
            />
          </div>
          <div className="headerForm_column">
            <InputContainer
              {...register("nome_paciente")}
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
                id={"cotEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType="number"
              />
              <InputContainer
                {...register("cot_esq_duracao_edema")}
                id={"cotEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                labelSize={defaultInputSize}
                inputType="number"
              />
              <TextAreaInput
                {...register("cot_esq_cometarios")}
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
                id={"cotDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("cot_dir_duracao_edema")}
                id={"cotDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("cot_dir_comentarios")}
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
                id={"joelhoEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("joe_esq_duracao")}
                id={"joelhoEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("joe_esq_comentarios")}
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
                id={"joelhoDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("joe_dir_duracao_edema")}
                id={"joelhoDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("joe_dir_comentarios")}
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
                id={"tornEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("tor_esq_duracao_edema")}
                id={"tornEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("tor_esq_comentarios")}
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
                id={"tornDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                {...register("tor_dir_duracao")}
                id={"tornDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <TextAreaInput
                {...register("tor_dir_comentarios")}
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
                id={"cotEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("cot_esq_am_comentarios")}
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
                id={"cotDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("cot_dir_am_comentarios")}
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
                id={"joelhoEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("joe_esq_am_comentarios")}
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
                id={"joelhoDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("joe_dir_am_comentarios")}
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
                id={"torEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("tor_esq_am_comentarios")}
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
                id={"torDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <TextAreaInput
                {...register("tor_dir_am_comentarios")}
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
                {...register("tor_esq_crep_palpavel")}
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
                id={"cotEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_esq_posicao")}
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
                id={"cotDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_dir_posicao")}
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
                {...register("joe_dir_flexao")}
                id={"joelhoEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_dir_posicao")}
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
                id={"joelhoDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_dir_posicao")}
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
                id={"torEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_esq_posicao")}
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
                id={"torDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_dir_posicao")}
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
                id={"cotEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_esq_posicao")}
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
                id={"cotDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("cot_dir_posicao")}
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
                {...register("joe_esq_ext")}
                id={"joelhoEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_esq_posicao")}
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
                id={"joelhoDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("joe_dir_posicao")}
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
                id={"torEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_esq_posicao")}
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
                id={"torDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
                {...register("tor_dir_posicao")}
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
                id={"cotEsquerdo_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_esq_dor_pontuacao")}
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
                id={"cotDireito_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_dir_dor_pontuacao")}
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
                {...register("joe_dir_dor_comentarios")}
                id={"joelhoEsquerdo_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_esq_dor_pontuacao")}
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
                id={"joelhoDireito_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_dir_dor_pontuacao")}
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
                id={"torEsquerdo_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("tor_esq_dor_pontuacao")}
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
                id={"torDireito_dor_articular_comentarios"}
                labelText={"Comentários"}
                placeholder={
                  "Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"
                }
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("tor_dir_dor_pontuacao")}
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
                id={"cotEsquerdo_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("cot_esq_for_ext")}
                id={"cotEsquerdo_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_esq_for_pontuacao")}
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
                id={"cotDireito_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("cot_dir_for_ext")}
                id={"cotDireito_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("cot_dir_for_pontuacao")}
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
                id={"joelhoEsquerdo_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("joe_dir_for_ext")}
                id={"joelhoEsquerdo_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_esq_for_pontuacao")}
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
                id={"joelhoDireito_forca_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("joe_dir_for_ext")}
                id={"joelhoDireito_forca_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
              />
              <InputContainer
                {...register("joe_dir_for_pontuacao")}
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
                id={"torEsquerdo_forca_elevacoes"}
                labelText={"Nº de elevações do calcanhar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_esq_for_flexaoPlantar")}
                id={"torEsquerdo_forca_flexaoPlantar"}
                labelText={"Flexão Plantar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_esq_for_dFlexao")}
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
                id={"torDireito_forca_elevacoes"}
                labelText={"Nº de elevações do calcanhar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_dir_for_flexaoPlantar")}
                id={"torDireito_forca_flexaoPlantar"}
                labelText={"Flexão Plantar"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <InputContainer
                {...register("tor_dir_for_dFlexao")}
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
