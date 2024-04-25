import StyledFormSubfield from "./formSubfield.js";

const FormSubfield = ({ title, orientation="row", titleSize, children }) => {
  return (
    <StyledFormSubfield $orientation={orientation && orientation} $titleSize={titleSize && titleSize}>
      <h4>{title}</h4>
      <section>{children}</section>
    </StyledFormSubfield>
  );
};

export default FormSubfield;
