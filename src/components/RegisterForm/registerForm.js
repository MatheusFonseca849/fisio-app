import { styled } from "styled-components";

const StyledRegisterForm = styled.form`

background-color: var(--color-grey-900);
    display: flex;
    flex-direction: column;
    padding: 16px;
    min-width: 350px;
    width: fit-content;
    max-width: 80%;
    border-radius: var(--radius-form-container);
    margin-top: var(--margin-header-top);

    @media(min-width: 768px){
        margin-top: var(--margin-header-top-desktop);
    }
    
    div{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        margin-bottom: 12px;

    }

`

export default StyledRegisterForm