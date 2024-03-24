import { styled } from "styled-components";

const StyledFormSubfield = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    h4{

        font-size: var(--font-size-0);
        font-weight: var(--font-weight-1);
        padding: 16px;

    }

    div{

        display: flex;
        flex-direction: column;
        gap: var(--gap-small);

    }

`

export default StyledFormSubfield