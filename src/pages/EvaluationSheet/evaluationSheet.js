import { styled } from "styled-components";

const StyledEvaluationSheet = styled.form`

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
`

export default StyledEvaluationSheet