import StyledFormSubfield from "./formSubfield.js";

const FormSubfield = ({ title, orientation="row", titleSize, children }) => {
  return (
    <StyledFormSubfield $orientation={orientation && orientation} $titleSize={titleSize && titleSize}>
      <h4>{title}</h4>
      <div>{children}</div>
    </StyledFormSubfield>
  );
};

export default FormSubfield;
