import styled from "styled-components";
import { HiGlobeAlt, HiMiniMagnifyingGlass, HiMoon } from "react-icons/hi2";

const StyledIcons = styled.span`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export default function Icons() {
  return (
    <StyledIcons>
      <HiMiniMagnifyingGlass />
      <HiGlobeAlt />
      <HiMoon />
    </StyledIcons>
  );
}
