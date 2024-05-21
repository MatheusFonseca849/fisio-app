import { styled, css } from "styled-components";

const StyledSelectInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  gap: 8px;

  label {
    font-weight: var(--font-weight-1);
    color: var(--color-fixed-black);
    
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
  }

  div{

    display: flex;
    flex-direction: column;
    
    select {
      padding: var(--padding-small);
      border: var(--border-thickness-default) solid;
      border-radius: var(--radius-default);
      width: 100%;

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

      cursor: pointer;
  
      option {
        background-color: var(--color-fixed-white);
        color: var(--color-grey-100);
      }
    }

    span{
      color: var(--color-error);
    }
  }

`;

export default StyledSelectInput;
