import { styled } from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    background-color: var(--color-grey-200);    
    width: 100%;
    right: 0;
    height: 82px;
    padding: var(--padding-header);
    color: var(--color-fixed-white);

    @media(max-width: 764px){
        flex-direction: row;
    }

    h1{

        font-size: var(--font-size-3);
        font-weight: 700;
        max-width: 90%;

    }

`

export default StyledHeader