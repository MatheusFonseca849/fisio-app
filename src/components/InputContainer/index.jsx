import { forwardRef, useState } from "react";
import StyledInputContainer from "./inputContainer.js";

const InputContainer = ({
  id,
  labelText,
  inputType = "text",
  placeholder,
  name,
  textArea = false,
  labelSize,
  ...rest
}, ref) => {

  const [ text, setText ] = useState('')
  return (
    <StyledInputContainer $labelSize={labelSize}>
      <label htmlFor={id}>{labelText}</label>

      {textArea ? (
        
        <textarea
          id={id}
          placeholder={placeholder}
          cols="25"
          rows="4"
          value={text}
          onInput={e => setText(e.target.value)}
          onKeyDown={e => console.log(e.target.value)}
          ref={ref}
          {...rest}
        />
      ) : (
        <input
          type={inputType}
          id={id}
          placeholder={placeholder && placeholder}
          name={name && name}
          onChange={(e) => console.log(e.target.value)}
          ref={ref}
          {...rest}
          // value={value && value}
          // required
        />
      )}
    </StyledInputContainer>
  );
};

export default forwardRef(InputContainer);
