import { forwardRef } from "react";
import StyledInputContainer from "./inputContainer.js";

const InputContainer = ({
  id,
  labelText,
  inputType = "text",
  placeholder,
  name,
  labelSize,
  errorMessage,
  ...rest
}, ref) => {

  return (
    <StyledInputContainer $labelSize={labelSize && labelSize} $error={errorMessage ? true : false}>
      <label htmlFor={id}>{labelText}</label>

        <div>
        <input
          type={inputType}
          step={rest.steps && rest.steps}
          id={id}
          placeholder={placeholder && placeholder}
          name={name && name}
          onChange={(e) => console.log(e.target.value)}
          ref={ref}
          {...rest}
        />
        <span>{errorMessage}</span>
        </div>
    </StyledInputContainer>
  );
};

export default forwardRef(InputContainer);
