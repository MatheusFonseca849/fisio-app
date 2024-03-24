import { styled } from "styled-components";

const StyledHeader = styled.header`

    display: flex;
    justify-content: center;
    background-color: var(--color-grey-200);
    width: 100vw;
    padding: 24px 0;
    margin-bottom: var(--margin-header-bottom);
    color: var(--color-fixed-white);

    #logoAnhanguera{

        width: 120px;
        height: 90px;

    }

    #logoLafup{

        width: fit-content;

    }

    h1{

        font-size: 28px;
        font-weight: 700;

    }

`

export default StyledHeader