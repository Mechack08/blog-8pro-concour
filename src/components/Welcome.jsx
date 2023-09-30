import styled from "styled-components";
import BannerImg from "../assets/kellen-riggin-TzNFf-RYW94-unsplash.jpg";
import Titles from "../ui/Titles";

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
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  color: var(--color-white-0);
`;

export default function Welcome() {
  return (
    <StyledWelcome>
      <img src={BannerImg} alt="banner" />
      <Overlay>
        <Text>
          <Titles size="bigest">Get the best blogs ever.</Titles>
          <p>Run deep into the power of reading & get inspired</p>
        </Text>
      </Overlay>
    </StyledWelcome>
  );
}
