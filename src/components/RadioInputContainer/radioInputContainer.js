import { styled, css } from "styled-components";

const StyledRadioInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-default);

  h3 {
    ${({ $labelSize }) => {
      // console.log($labelSize);
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
          // console.log($optionSize);
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
