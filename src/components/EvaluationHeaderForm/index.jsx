import InputContainer from "../InputContainer/index.jsx";
import SelectInput from "../SelectInput/index.jsx";
import StyledEvaluationHeader from "./evaluationHeaderForm.js";
const EvaluationHeaderForm = ({children}) => {
  return (
    <StyledEvaluationHeader>
      {children}
    </StyledEvaluationHeader>
  );
};

export default EvaluationHeaderForm;
