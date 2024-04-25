import { styled, css } from "styled-components";

const StyledInputContainer = styled.div`

    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: ${props => props.inputType === "radio" ? "fit-content" : "100%"};

    label{
        ${({$labelSize}) => {
            if($labelSize){
                return css`
                    font-size: ${({$labelSize}) => $labelSize};
                `
            }else{
                return css`
                    font-size: var(--font-size-4);
                `
            }
        }}
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

    }
    

`

export default StyledInputContainer