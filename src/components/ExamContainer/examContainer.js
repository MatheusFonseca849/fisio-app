import { styled, css } from "styled-components";

const StyledExamContainer = styled.div`

    background-color: var(--color-grey-900);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: var(--padding-default);
    border-radius: var(--radius-form-container);

    h2{
        ${({$titleSize}) => {
            if($titleSize){
                return css`
                    font-size: ${({$titleSize}) => $titleSize};
                `
            }else{
                return css`
                    font-size: var(--font-size-2);
                `
            }
        }}
        font-weight: var(--font-weight-1);
        color: var(--color-grey-100);

    }

`

export default StyledExamContainer