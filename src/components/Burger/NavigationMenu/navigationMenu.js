import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

const StyledNavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--gap-nav-menu);
  background-color: var(--color-grey-200);
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;

    ${({ open }) => {
      if (open) {
        return css`
          transform: translateX(0);
        `;
      } else {
        return css`
          transform: translateX(100%);
        `;
      }
    }}
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: var(--color-grey-950);
      padding: 18px 16px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-grey-950);
  font-weight: var(--font-weight-3);
  border-bottom: 2px transparent;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }
`;
export default StyledNavMenu;
