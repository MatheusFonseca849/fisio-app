import { styled } from "styled-components";

const StyledLoginRegisterFooter = styled.div`
  background-color: var(--color-grey-900);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-width: 320px;
  width: fit-content;
  border-radius: var(--radius-form-container);
  margin-top: 28px;

  h3{
    font-size: var(--font-size-2);
  }

  span{
    font-size: var(--font-size-2);

    a{
        font-size: var(--font-size-2);
        color: var(--color-primary);
    }
  }

`;

export default StyledLoginRegisterFooter;
