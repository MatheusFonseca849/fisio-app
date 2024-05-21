import { useContext, useState } from "react";
import StyledBurguer from "./burger.js";
import NavigationMenu from "./NavigationMenu/index.jsx";
import { FormContext } from "../../providers/FormContext.jsx";

const Burguer = () => {

    const {contextWorks} = useContext(FormContext)

    const [open, setOpen] = useState(false);
    // console.log(open)
    return(
        <>
        <StyledBurguer open={open} onClick={() => {
            setOpen(!open)
            contextWorks()
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