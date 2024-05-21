import { styled, css } from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  width: fit-content;

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

  div {

    display: flex;
    flex-direction: column;

    input {
      border: var(--border-thickness-default) solid ;
      ${({$error}) => {
        if($error){
          return css`
            border-color: var(--color-error);
          `
        }else{
          return css`
            border-color: var(--color-grey-500);
          `
        }
      }}
      padding: var(--padding-small);
      border-radius: var(--radius-default);
      background-color: var(--color-grey-950);
      width: 100%;
    }

    span {
      color: var(--color-error);
    }
  }
`;

export default StyledInputContainer;
