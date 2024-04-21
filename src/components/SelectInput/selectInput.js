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

  select {
    padding: var(--padding-small);
    border: var(--border-thickness-default) solid var(--color-grey-500);
    border-radius: var(--radius-default);
    width: 100%;
    cursor: pointer;

    option {
      background-color: var(--color-fixed-white);
      color: var(--color-grey-100);
    }
  }
`;

export default StyledSelectInput;
