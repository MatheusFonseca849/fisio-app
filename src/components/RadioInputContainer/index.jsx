import StyledRadioInputContainer from "./radioInputContainer.js";

const RadioInputContainer = ({
  id,
  labelText,
  labelSize,
  optionSize,
  options,
}) => {
  return (
    <StyledRadioInputContainer
      $labelSize={labelSize && labelSize}
      $optionSize={optionSize && optionSize}
    >
      <h2>{labelText}</h2>
      <div>
        {options.map((option) => (
          <div key={option.index}>
            <input type="radio" name={id} id={id} value={option.value} />
            <label htmlFor={id}>{option.label}</label>
          </div>
        ))}
      </div>
    </StyledRadioInputContainer>
  );
};

export default RadioInputContainer;
