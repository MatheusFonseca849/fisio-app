import { forwardRef } from "react"
import StyledTextAreaInput from "./textAreaInput";

const TextAreaInput = ({id, placeholder, labelText, labelSize, ...rest}, ref) => {
    return(
        
        <StyledTextAreaInput $labelSize={labelSize}>
            
            <label htmlFor={id}>{labelText}</label>
            <textarea
              id={id}
              placeholder={placeholder}
              onChange={e => console.log(e.target.value)}
              cols="25"
              rows="4"
              ref={ref}
              {...rest}
            />

        </StyledTextAreaInput>

    )
}

export default forwardRef(TextAreaInput)