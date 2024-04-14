import { styled } from "styled-components";

const StyledLoginForm = styled.form`

    background-color: var(--color-grey-900);
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: fit-content;
    border-radius: var(--radius-form-container);
    
    div{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        gap: 8px;
        margin-bottom: 12px;

    }
`

export default StyledLoginForm