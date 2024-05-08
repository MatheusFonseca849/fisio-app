import { forwardRef } from "react";
import StyledRadioInputContainer from "./radioInputContainer.js";

const RadioInputContainer = ({
  id,
  labelText,
  labelSize,
  optionSize,
  options,
  errorMessage,
  ...rest
}, ref) => {
  return (
    <StyledRadioInputContainer
      $labelSize={labelSize && labelSize}
      $optionSize={optionSize && optionSize}
    >
      <h3>{labelText}</h3>
      <div>
        {options.map((option) => (
          <div key={option.index} title={option.title && option.title}>
            <input
              type="radio"
              name={id}
              id={`${id}_${option.value}`}
              value={option.value}
              onClick={(e) => console.log(e.target.value)}
              ref={ref}
              {...rest}
            />
            <label htmlFor={id}>{option.label}</label>
          </div>
        ))}
      </div>
      <span>{errorMessage}</span>
    </StyledRadioInputContainer>
  );
};

export default forwardRef(RadioInputContainer);
