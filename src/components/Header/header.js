import { styled } from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    background-color: var(--color-grey-200);    
    width: 100vw;
    padding: var(--padding-header);
    color: var(--color-fixed-white);

    h1{

        /* font-size: var(--font-size-2); */
        font-weight: 700;
        max-width: 90%;

    }

`

export default StyledHeader