import Burguer from "../Burger/index.jsx";
import StyledHeader from "./header.js";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      
      {children}
      <Burguer/>
      
    </StyledHeader>
  );
};

export default Header;
