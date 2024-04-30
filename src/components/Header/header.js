import { styled } from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    background-color: var(--color-grey-200);
    width: 100%;
    padding: var(--padding-header);
    margin-bottom: var(--margin-header-bottom);
    color: var(--color-fixed-white);

    h1{

        font-size: var(--font-size-2);
        font-weight: 700;
        width: fit-content;
        max-width: 90%;

    }

`

export default StyledHeader