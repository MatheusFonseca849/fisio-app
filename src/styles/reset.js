
import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`

html,
body,
header,
section,
select,
main,
nav,
div,
ul,
li,
img,
button,
input,
textarea,
figure,
h1,
h2,
h3,
h4,
a,
p {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0;
    border: none;
    text-align: unset;
    font-family: 'Montserrat', sans-serif;
}

main{

    padding: 0 12px;
    background: linear-gradient(150deg, rgba(255,78,26,0.45702030812324934) 23%, rgba(255,255,255,1) 54%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

button {
    cursor: pointer;
}

`

export default Reset