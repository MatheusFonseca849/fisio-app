import { useState } from "react";
import StyledBurguer from "./burger.js";
import NavigationMenu from "./NavigationMenu/index.jsx";

const Burguer = () => {

    const [open, setOpen] = useState(false);
    console.log(open)
    return(
        <>
        <StyledBurguer open={open} onClick={() => {
            setOpen(!open)
        }}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurguer>
        <NavigationMenu open={open}/>
        </>

    )

}

export default Burguer