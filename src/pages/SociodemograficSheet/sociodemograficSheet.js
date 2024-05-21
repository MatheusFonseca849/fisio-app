import { styled } from "styled-components";

const StyledSocioForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap-default);
  background-color: transparent;
  width: fit-content;
  max-width: 90%;
  padding: 16px 0;
  margin-top: var(--margin-header-top);

    @media(min-width: 768px){
        margin-top: var(--margin-header-top-desktop);
    }

  .headerForm_column{

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

  }
`;

export default StyledSocioForm;
