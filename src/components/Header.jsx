import styled from "styled-components";
import Menus from "./Menus";
import Icons from "./Icons";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 6.4rem;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-text-2);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.span`
  font-size: 2.4rem;
  font-weight: 900;
  color: var(--color-text);
  position: relative;
  padding-right: 1.6rem;

  &::after {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    position: absolute;
    right: 0;
    bottom: 0.72rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo>8pro</Logo>
      <Menus />
      <Icons />
    </StyledHeader>
  );
}
