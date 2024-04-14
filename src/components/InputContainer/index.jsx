import StyledInputContainer from "./inputContainer.js";

const InputContainer = ({
  id,
  labelText,
  inputType = "text",
  placeholder,
  value,
  name,
  textArea = false,
}) => {
  return (
    <StyledInputContainer>
      <label htmlFor={id}>{labelText}</label>

      {textArea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          cols="40"
          rows="4"
        ></textarea>
      ) : (
        <input
          type={inputType}
          id={id}
          placeholder={placeholder && placeholder}
          name={name && name}
          value={value && value}
          required
        />
      )}
    </StyledInputContainer>
  );
};

export default InputContainer;
