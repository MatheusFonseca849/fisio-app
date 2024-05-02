import { styled } from "styled-components";

const StyledInputContainer = styled.div`

    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: ${props => props.inputType === "radio" ? "fit-content" : "100%"};

    input{

        padding: var(--padding-small);
        border: var(--border-thickness-default) solid var(--color-grey-500);
        border-radius: var(--radius-default);
        background-color: var(--color-grey-950);

    }
    

`

export default StyledInputContainer