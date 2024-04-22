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
      <h3>{labelText}</h3>
      <div>
        {options.map((option) => (
          <div key={option.index} title={option.title && option.title}>
            <input type="radio" name={id} id={`${id}_${option.value}`} value={option.value} />
            <label htmlFor={id}>{option.label}</label>
          </div>
        ))}
      </div>
    </StyledRadioInputContainer>
  );
};

export default RadioInputContainer;
