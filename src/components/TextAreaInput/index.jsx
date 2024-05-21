import { forwardRef } from "react"
import StyledTextAreaInput from "./textAreaInput";

const TextAreaInput = ({id, placeholder, labelText, labelSize, errorMessage, ...rest}, ref) => {
    return(
        
        <StyledTextAreaInput $labelSize={labelSize} $error={errorMessage ? true : false}>
            
            <label htmlFor={id}>{labelText}</label>
            <div>
            <textarea
              id={id}
              placeholder={placeholder}
              onChange={e => console.log(e.target.value)}
              cols="25"
              rows="4"
              ref={ref}
              {...rest}
            />
            <span>{errorMessage && errorMessage}</span>
            </div>
        </StyledTextAreaInput>

    )
}

export default forwardRef(TextAreaInput)