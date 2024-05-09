import Burguer from "../Burger/index.jsx";
import StyledHeader from "./header.js";

const Header = ({ children, titleSize }) => {
  return (
    <StyledHeader $titleSize={titleSize && titleSize}>
      <h1>
      {children}
      </h1>
      <Burguer/>
      
    </StyledHeader>
  );
};

export default Header;
