
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

    background: linear-gradient(135deg, rgba(8,1,135,1) 1%, rgba(29,29,208,1) 47%, rgba(0,212,255,1) 97%);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;

    /* div{
        display: flex;
        flex-direction: column;
        width: 100%;
    } */

}

button {
    cursor: pointer;
}

`

export default Reset