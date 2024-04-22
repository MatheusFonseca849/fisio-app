import { styled, css } from "styled-components";

const StyledFormSubfield = styled.div`

    display: flex;
    flex-direction: ${({$orientation}) => $orientation && $orientation};
    justify-content: space-between;
    align-items: start;
    gap: 8px;
    background-color: var(--color-grey-800);
    padding: var(--padding-medium);
    border-radius: var(--radius-default);

    h4{
        ${({$titleSize}) => {
            if($titleSize){
                return css`
                    font-size: ${({$titleSize}) => $titleSize};
                `
            }else{
                return css`
                    font-size: var(--font-size-0);
                `
            }
        }}
        font-weight: var(--font-weight-1);
        padding: 16px;

    }

    div{

        display: flex;
        flex-direction: column;
        gap: var(--gap-small);

    }

`

export default StyledFormSubfield