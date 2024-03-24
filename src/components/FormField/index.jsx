import StyledFormField from "./formField.js";

const FormField = ({ title, children }) => {

    return (



        <StyledFormField>

            <h3>{title}</h3>
            {children}

           
        </StyledFormField>





    )

}

export default FormField