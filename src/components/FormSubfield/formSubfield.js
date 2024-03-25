import { styled } from "styled-components";

const StyledFormSubfield = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    background-color: var(--color-grey-800);
    padding: var(--padding-medium);
    border-radius: var(--radius-default);

    h4{

        font-size: var(--font-size-0);
        font-weight: var(--font-weight-1);
        padding: 16px;
        text-align: center;

    }

    div{

        display: flex;
        flex-direction: column;
        gap: var(--gap-small);

    }

`

export default StyledFormSubfield