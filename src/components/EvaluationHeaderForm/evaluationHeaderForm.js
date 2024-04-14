import { styled } from "styled-components";

const StyledEvaluationHeader = styled.div`

    padding: var(--padding-default);
    background-color: var(--color-grey-900);
    display: flex;
    flex-direction: column;
    gap: var(--gap-default);
    border-radius: var(--radius-default);

    .headerForm_column{

        display: flex;
        gap: 0.75rem;
        justify-content: flex-start;

        div{

            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;

            label{
        
                font-size: var(--font-size-4);
                font-weight: var(--font-weight-1);
                color: var(--color-grey-100);
            }

            input, select{

                padding: 4px;
                border: 2px solid var(--color-grey-500);
                border-radius: var(--radius-default);
                background-color: var(--color-grey-950);
                width: 100%;

            }

        }

    }


`

export default StyledEvaluationHeader