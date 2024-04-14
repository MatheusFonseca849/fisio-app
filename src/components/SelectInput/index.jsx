import StyledSelectInput from "./selectInput.js";

const SelectInput = ({ id, labelText, options }) => {
  return (
    <StyledSelectInput>
      <label htmlFor={id}>{labelText}</label>
      <select name={id} id={id}>
        {options.map((option) => (
          <option key={option.index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </StyledSelectInput>
  );
};

export default SelectInput;
