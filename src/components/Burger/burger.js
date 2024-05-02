import { styled, css } from "styled-components";

const StyledBurguer = styled.div`
  width: 2rem;
  height: 1.5rem;
  z-index: 20;
  display: none;
  position: absolute;
  right: 18px;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    ${({open}) => {
        if(open){
            
            return css`
            background-color: var(--color-primary);
            `
        }else{
            return css`
            background-color: var(--color-grey-950);
            `
        }
    }}
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX()")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default StyledBurguer;
