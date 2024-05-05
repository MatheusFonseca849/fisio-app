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
    <StyledInputContainer $labelSize={labelSize}>
      <label htmlFor={id}>{labelText}</label>

      
        <input
          type={inputType}
          step={rest.steps && rest.steps}
          id={id}
          placeholder={placeholder && placeholder}
          name={name && name}
          onChange={(e) => console.log(e.target.value)}
          ref={ref}
          {...rest}
          // required
        />
        <span>{errorMessage}</span>
    </StyledInputContainer>
  );
};

export default forwardRef(InputContainer);
