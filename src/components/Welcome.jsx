import styled, { css } from "styled-components";
import BannerImg from "../assets/kellen-riggin-TzNFf-RYW94-unsplash.jpg";
import Titles from "../ui/Titles";
import { useRevealContents } from "../hooks/useRevealContents";

const StyledWelcome = styled.div`
  width: 100%;
  height: 56rem;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: scale(0.64);
  transition: all 0.6s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  color: var(--color-white-0);
`;

export default function Welcome() {
  const { isVisible, containerRef } = useRevealContents({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <StyledWelcome>
      <img src={BannerImg} alt="banner" />
      <Overlay ref={containerRef} visible={isVisible}>
        <Text>
          <Titles size="bigest">Get the best blogs ever.</Titles>
          <p>Run deep into the power of reading & get inspired</p>
        </Text>
      </Overlay>
    </StyledWelcome>
  );
}
