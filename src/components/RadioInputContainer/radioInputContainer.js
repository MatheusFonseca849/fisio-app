import { styled, css } from "styled-components";

const StyledRadioInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-default);

  h2 {
    ${({ $labelSize }) => {
      console.log($labelSize);
      if ($labelSize) {
        return css`
          font-size: ${(props) => props.$labelSize};
        `;
      } else {
        return css`
          font-size: var(--font-size-3);
        `;
      }
    }};

    width: fit-content;
  }

  div {
    display: flex;
    gap: var(--gap-default);

    div {
      align-items: center;
      gap: var(--gap-radio-input);

      input[type="radio"] {
        accent-color: var(--color-primary);
        cursor: pointer;
      }
      label {
        ${({ $optionSize }) => {
          console.log($optionSize);
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
`;

export default StyledRadioInputContainer;
