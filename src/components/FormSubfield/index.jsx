import StyledFormSubfield from "./formSubfield.js";

const FormSubfield = ({title, children}) => {

return(
    <StyledFormSubfield>
        <h4>{title}</h4>
        <div>
        {children}
        </div>
    </StyledFormSubfield>
)

}

export default FormSubfield