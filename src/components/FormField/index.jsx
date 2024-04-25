import StyledFormField from "./formField.js";

const FormField = ({ title, titleSize, children }) => {
  return (
    <StyledFormField $titleSize={titleSize && titleSize}>
      <h3>{title}</h3>
        <section>
        {children}
        </section>
      
    </StyledFormField>
  );
};

export default FormField;
