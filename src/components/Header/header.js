import { styled } from "styled-components";

const StyledHeader = styled.header`

    text-align: center;
    background-color: var(--color-grey-200);
    width: 100%;
    padding: var(--padding-header);
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

        font-size: var(--font-size-0);
        font-weight: 700;

    }

`

export default StyledHeader