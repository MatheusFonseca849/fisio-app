import { styled } from "styled-components";

const StyledInputContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: fit-content;

    label{

        font-size: var(--font-size-3);
        font-weight: var(--font-weight-1);
        color: var(--color-fixed-black);

    }

    textarea{
        width: 100%;
        resize: none;
        padding: var(--padding-small);
        border-radius: var(--radius-default);
        background-color: var(--color-grey-950);
        border: var(--border-thickness-default) solid var(--color-grey-500);

    }

    input{

        padding: var(--padding-small);
        border: var(--border-thickness-default) solid var(--color-grey-500);
        border-radius: var(--radius-default);
        background-color: var(--color-grey-950);
        width: 100%;

    }
    

`

export default StyledInputContainer