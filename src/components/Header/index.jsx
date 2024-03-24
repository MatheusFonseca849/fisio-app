import StyledHeader from "./header.js";

const Header = ({children}) => {

    return(

        <StyledHeader>
            {/* <img src="./src/images/logoAnhanguera.jpg" id="logoAnhanguera" alt="" /> */}
            {children}
            {/* <img src="./src/images/lafupLogo.jpeg" id="logoLafup" alt="Lafup: Laboratório de avaliação funcional e performance motora humana" /> */}
        </StyledHeader>

    )

}

export default Header