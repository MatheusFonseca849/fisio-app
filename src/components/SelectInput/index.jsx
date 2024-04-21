import StyledSelectInput from "./selectInput.js";

const SelectInput = ({ id, labelText, options, labelSize }) => {
  return (
    <StyledSelectInput $labelSize={labelSize && labelSize}>
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
