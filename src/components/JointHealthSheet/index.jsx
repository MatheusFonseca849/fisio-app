import EvaluationHeaderForm from "../EvaluationHeaderForm";
import ExamContainer from "../ExamContainer";
import FormField from "../FormField";
import FormSubfield from "../FormSubfield";
import Header from "../Header";
import InputContainer from "../InputContainer";
import RadioInputContainer from "../RadioInputContainer";
import SubmitButton from "../SubmitButton/index.jsx";
import StyledJointHealthSheet from "./jointHealthSheet.js";

const JointHealthPage = () => {
  const defaultExamContainerSize = "1.5rem";
  const defaultFormFieldSize = "1.375rem";
  const defaultFormSubfieldSize = "1.25rem";
  const defaultInputSize = "1rem";

  return (
    <>
      <Header>
        <h1>Saúde articular na Hemofilia</h1>
      </Header>
      <StyledJointHealthSheet title="Formulário de saúde articular">
        <EvaluationHeaderForm>
          <div className="headerForm_column">
            <InputContainer
              id={"numero_avaliacao"}
              labelText={"Nº avaliação"}
              inputType="number"
            />
            <InputContainer
              id={"data_avaliação"}
              labelText={"Data"}
              inputType={"date"}
            />
          </div>

          <div className="headerForm_column">
            <InputContainer
              id={"id_paciente"}
              labelText={"ID do paciente"}
              inputType="number"
            />
          </div>
          <div className="headerForm_column">
            <InputContainer
              id={"nome_paciente"}
              labelText={"Nome do paciente"}
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
                id={"cotEsquerdo_tipoEdema"}
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
                id={"cotEsquerdo_pts_referenciaOssea"}
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
                id={"cotEsquerdo_palpavel"}
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
                id={"cotEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                id={"cotEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <InputContainer
                id={"cotEsquerdo_comentarios"}
                labelText={"Comentários:"}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
                id={"cotDireito_tipoEdema"}
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
                id={"cotDireito_pts_referenciaOssea"}
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
                id={"cotDireito_palpavel"}
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
                id={"cotDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                id={"cotDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <InputContainer
                id={"cotDireito_comentarios"}
                labelText={"Comentários:"}
                textArea={true}
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
                id={"joelhoEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                id={"joelhoEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <InputContainer
                id={"joelhoEsquerdo_comentarios"}
                labelText={"Comentários:"}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
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
                id={"joelhoDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                id={"joelhoDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <InputContainer
                id={"joelhoDireito_comentarios"}
                labelText={"Comentários:"}
                textArea={true}
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
                id={"tornEsquerdo_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                id={"tornEsquerdo_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <InputContainer
                id={"tornEsquerdo_comentarios"}
                labelText={"Comentários:"}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              titleSize={defaultFormSubfieldSize}
              orientation="column"
            >
              <RadioInputContainer
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
                id={"tornDireito_pontuacao"}
                labelText={"Pontuação"}
                inputType="number"
              />
              <InputContainer
                id={"tornDireito_duracao"}
                labelText={"Duração do edema (meses):"}
                inputType="number"
              />
              <InputContainer
                id={"tornDireito_comentarios"}
                labelText={"Comentários:"}
                textArea={true}
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
                id={"cotEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <InputContainer
                id={"cotEsquerdo_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                id={"cotDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <InputContainer
                id={"cotDireito_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
                textArea={true}
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
                id={"joelhoEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <InputContainer
                id={"joelhoEsquerdo_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                id={"joelhoDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <InputContainer
                id={"joelhoDireito_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
                textArea={true}
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
                id={"torEsquerdo_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <InputContainer
                id={"torEsquerdo_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
                textArea={true}
              />
            </FormSubfield>

            <FormSubfield
              title={"Direito"}
              orientation="column"
              titleSize={defaultFormSubfieldSize}
            >
              <InputContainer
                id={"torDireito_pontuacao_atrofia"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />

              <InputContainer
                id={"torDireito_comentarios"}
                labelText={"Comentários"}
                labelSize={defaultInputSize}
                textArea={true}
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
                id={"cotEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"cotDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"joelhoEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"joelhoDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"torEsquerdo_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"torDireito_flexao"}
                labelText={"Flexão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"cotEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"cotDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"joelhoEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"joelhoDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"torEsquerdo_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"torDireito_extensao"}
                labelText={"Extensão"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
              <RadioInputContainer
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
                id={"torDireito_pontuacao_perdaExtensao"}
                labelText={"Pontuação"}
                labelSize={defaultInputSize}
                inputType={"number"}
              />
            </FormSubfield>
          </FormField>
        </ExamContainer>

        <ExamContainer title={"Dor Articular"} titleSize={defaultExamContainerSize}>
                <FormField title={"Cotovelo"} titleSize={defaultFormFieldSize}>
                  <FormSubfield title={"Esquerdo"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                    <InputContainer 
                    id={"cotEsquerdo_dor_articular_comentarios"}
                    labelText={"Comentários"}
                    placeholder={"Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"}
                    labelSize={defaultInputSize}
                    textArea={true}
                    />
                    <InputContainer
                    id={"cotEsquerdo_dor_articular_pontuacao"}
                    labelText={"Pontuação"}
                    labelSize={defaultInputSize}
                    inputType={"number"}
                    />
                  </FormSubfield>

                  <FormSubfield title={"Direito"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                    <InputContainer 
                    id={"cotDireito_dor_articular_comentarios"}
                    labelText={"Comentários"}
                    placeholder={"Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"}
                    labelSize={defaultInputSize}
                    textArea={true}
                    />
                    <InputContainer
                    id={"cotDireito_dor_articular_pontuacao"}
                    labelText={"Pontuação"}
                    labelSize={defaultInputSize}
                    inputType={"number"}
                    />
                  </FormSubfield>
                </FormField>

                <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
                  <FormSubfield title={"Esquerdo"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                    <InputContainer 
                    id={"joelhoEsquerdo_dor_articular_comentarios"}
                    labelText={"Comentários"}
                    placeholder={"Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"}
                    labelSize={defaultInputSize}
                    textArea={true}
                    />
                    <InputContainer
                    id={"joelhoEsquerdo_dor_articular_pontuacao"}
                    labelText={"Pontuação"}
                    labelSize={defaultInputSize}
                    inputType={"number"}
                    />
                  </FormSubfield>

                  <FormSubfield title={"Direito"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                    <InputContainer 
                    id={"joelhoDireito_dor_articular_comentarios"}
                    labelText={"Comentários"}
                    placeholder={"Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"}
                    labelSize={defaultInputSize}
                    textArea={true}
                    />
                    <InputContainer
                    id={"joelhoDireito_dor_articular_pontuacao"}
                    labelText={"Pontuação"}
                    labelSize={defaultInputSize}
                    inputType={"number"}
                    />
                  </FormSubfield>
                </FormField>

                <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
                  <FormSubfield title={"Esquerdo"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                    <InputContainer 
                    id={"torEsquerdo_dor_articular_comentarios"}
                    labelText={"Comentários"}
                    placeholder={"Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"}
                    labelSize={defaultInputSize}
                    textArea={true}
                    />
                    <InputContainer
                    id={"torEsquerdo_dor_articular_pontuacao"}
                    labelText={"Pontuação"}
                    labelSize={defaultInputSize}
                    inputType={"number"}
                    />
                  </FormSubfield>

                  <FormSubfield title={"Direito"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                    <InputContainer 
                    id={"torDireito_dor_articular_comentarios"}
                    labelText={"Comentários"}
                    placeholder={"Movimento articular ativo realizado no arco de movimento completo, com leve pressão ao final do movimento"}
                    labelSize={defaultInputSize}
                    textArea={true}
                    />
                    <InputContainer
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
                    <FormSubfield title={"Esquerdo"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                        <InputContainer id={"cotEsquerdo_forca_flexao"} labelText={"Flexão"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"cotEsquerdo_forca_extensao"} labelText={"Extensão"} labelSize={defaultInputSize}/>
                        <InputContainer id={"cotEsquerdo_forca_pontuacao"} labelText={"Pontuação"} labelSize={defaultInputSize}/>
                    </FormSubfield>
                    <FormSubfield title={"Direito"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                        <InputContainer id={"cotDireito_forca_flexao"} labelText={"Flexão"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"cotDireito_forca_extensao"} labelText={"Extensão"} labelSize={defaultInputSize}/>
                        <InputContainer id={"cotDireito_forca_pontuacao"} labelText={"Pontuação"} labelSize={defaultInputSize}/>
                    </FormSubfield>
                </FormField>

                <FormField title={"Joelho"} titleSize={defaultFormFieldSize}>
                    <FormSubfield title={"Esquerdo"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                        <InputContainer id={"joelhoEsquerdo_forca_flexao"} labelText={"Flexão"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"joelhoEsquerdo_forca_extensao"} labelText={"Extensão"} labelSize={defaultInputSize}/>
                        <InputContainer id={"joelhoEsquerdo_forca_pontuacao"} labelText={"Pontuação"} labelSize={defaultInputSize}/>
                    </FormSubfield>
                    <FormSubfield title={"Direito"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                        <InputContainer id={"joelhoDireito_forca_flexao"} labelText={"Flexão"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"joelhoDireito_forca_extensao"} labelText={"Extensão"} labelSize={defaultInputSize}/>
                        <InputContainer id={"joelhoDireito_forca_pontuacao"} labelText={"Pontuação"} labelSize={defaultInputSize}/>
                    </FormSubfield>
                </FormField>

                <FormField title={"Tornozelo"} titleSize={defaultFormFieldSize}>
                  <FormSubfield title={"Esquerdo"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                        <InputContainer id={"torEsquerdo_forca_elevacoes"} labelText={"Nº de elevações do calcanhar"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"torEsquerdo_forca_flexaoPlantar"} labelText={"Flexão Plantar"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"torEsquerdo_forca_dorsiflexao"} labelText={"Dorsiflexão"} labelSize={defaultInputSize} inputType={"number"}/>
                  </FormSubfield>

                  <FormSubfield title={"Direito"} titleSize={defaultFormSubfieldSize} orientation={"column"}>
                        <InputContainer id={"torDireito_forca_elevacoes"} labelText={"Nº de elevações do calcanhar"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"torDireito_forca_flexaoPlantar"} labelText={"Flexão Plantar"} labelSize={defaultInputSize} inputType={"number"}/>
                        <InputContainer id={"torDireito_forca_dorsiflexao"} labelText={"Dorsiflexão"} labelSize={defaultInputSize} inputType={"number"}/>
                  </FormSubfield>
                </FormField>
        </ExamContainer>
        <SubmitButton>Enviar Formulário</SubmitButton>
      </StyledJointHealthSheet>
    </>
  );
};

export default JointHealthPage;
