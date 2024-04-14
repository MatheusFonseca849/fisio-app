import InputContainer from "../InputContainer/index.jsx";
import SelectInput from "../SelectInput/index.jsx";
import StyledEvaluationHeader from "./evaluationHeaderForm.js";
const EvaluationHeaderForm = () => {
  return (
    <StyledEvaluationHeader>
      <div className="headerForm_column">
        <InputContainer
          id={"ID"}
          labelText={"ID"}
          inputType={"text"}
          placeholder={"Insira o ID"}
        />
        <InputContainer id={"date"} labelText={"Data:"} inputType={"date"} />
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
    </StyledEvaluationHeader>
  );
};

export default EvaluationHeaderForm;
