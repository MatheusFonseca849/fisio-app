import { styled, css } from "styled-components";

const StyledFormField = styled.div`

    background-color: var(--color-grey-700);
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: var(--radius-form-container);
    padding: 8px;

    h3{
        ${({$titleSize}) => {
            if($titleSize){
                return css`
                    font-size: ${({$titleSize}) => $titleSize};
                `
            }else{
                return css`
                    font-size: var(--font-size-3);
                `
            }
        }}
        font-weight: var(--font-weight-1);

    }

`

export default StyledFormField