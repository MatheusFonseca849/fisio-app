import { styled, css } from "styled-components";

const StyledTextAreaInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: ${(props) => (props.inputType === "radio" ? "fit-content" : "100%")};


  label {
    ${({ $labelSize }) => {
      if ($labelSize) {
        return css`
          font-size: ${({ $labelSize }) => $labelSize};
        `;
      } else {
        return css`
          font-size: var(--font-size-4);
        `;
      }
    }}
    font-weight: var(--font-weight-1);
    color: var(--color-fixed-black);
  }

  div{

    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      resize: none;
      padding: var(--padding-small);
      border-radius: var(--radius-default);
      background-color: var(--color-grey-950);
      border: var(--border-thickness-default) solid;
      overflow-y: hidden;

      ${({$error}) => {

        if($error){
          return css`
            border-color: var(--color-error);
          `
        }else{
          return css`
            border-color: var(--color-grey-400);
          `
        }

      }}
    }

    span{
      color: var(--color-error);
    }
  }

`;

export default StyledTextAreaInput;
