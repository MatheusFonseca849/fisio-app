import { styled, css } from "styled-components";

const StyledRadioInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: var(--gap-default);

  h3 {
    ${({ $labelSize }) => {
      if ($labelSize) {
        return css`
          font-size: ${(props) => props.$labelSize};
        `;
      } else {
        return css`
          font-size: var(--font-size-4);
        `;
      }
    }};

    width: fit-content;
  }
  div{

    display: flex;
    flex-direction: column;
    gap: 4px;


    div {
      display: flex;
      flex-direction: row;
      gap: var(--gap-default);
  
      div {
        align-items: center;
        gap: var(--gap-radio-input);
        flex-direction: row;
  
        input[type="radio"] {
          accent-color: var(--color-primary);
          cursor: pointer;
        }
        label {
          ${({ $optionSize }) => {
            if ($optionSize) {
              return css`
                font-size: ${({ $optionSize }) => $optionSize};
              `;
            } else {
              return css`
                font-size: var(--font-size-4);
              `;
            }
          }}
        }
      }
    }

    span{
      color: var(--color-error);
    }
  }
`;

export default StyledRadioInputContainer;
