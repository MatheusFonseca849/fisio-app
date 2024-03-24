import { createGlobalStyle } from "styled-components";

const GlobalRoot = createGlobalStyle`

    :root{

        --color-primary: #FF4E1A;
        --color-secondary: #D8270040;
        --color-fixed-white: #FEFEF9;
        --color-grey-950: #FAFAFA;
        --color-grey-900: #E9E9E9;
        --color-grey-800: #D3D3D3;
        --color-grey-700: #BDBDBD;
        --color-grey-600: #A7A7A7;
        --color-grey-500: #919191;
        --color-grey-400: #7B7B7B;
        --color-grey-300: #3D3D3D;
        --color-grey-200:  #2A2A2A;
        --color-grey-100: #202020;
        --color-fixed-black: #1C1C1C;

        --gap-default: 16px;
        --gap-small: 8px;

        --radius-default: 6px;
        --radius-form-container: 12px;

        --padding-default-mobile: 8px;
        --padding-default: 16px;
        --padding-small: 4px;

        --margin-main-mobile: 12px;
        --margin-main-desktop: 32px;
        --margin-header-bottom: 18px;

        --font-size-0: 2rem; /* 28px */
        --font-size-1: 1.625rem; /* 26px */
        --font-size-2: 1.375rem; /* 22px */
        --font-size-3: 1.125rem; /* 18px */
        --font-size-4: 1rem; /* 16px default */

        --font-weight-0: 900;
        --font-weight-1: 700;
        --font-weight-2: 500;
        --font-weight-3: 400;

    }

`

export default GlobalRoot