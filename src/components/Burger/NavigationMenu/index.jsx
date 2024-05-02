import StyledNavMenu from "./navigationMenu"
import { StyledLink } from "./navigationMenu";

const NavigationMenu = ({open}) => {

    return(
        <StyledNavMenu open={open}>
            <li>
            <StyledLink to={'/fichaAvaliacao'}>Ficha de Avaliação</StyledLink>
            </li>
            <li>
                <StyledLink to={'/sociodemografico'}>Formulário sociodemográfico</StyledLink>
            </li>
            <li>
                <StyledLink to={'/saudeArticular'}>Formulário de saúde articular</StyledLink>
            </li>
        </StyledNavMenu>
    )

}

export default NavigationMenu