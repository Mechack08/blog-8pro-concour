import styled from "styled-components";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Container from "../ui/Container";
import RecentBlogs from "../components/RecentBlogs";

const StyledHome = styled.main``;

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Welcome />
      <Container>
        <RecentBlogs />
      </Container>
    </StyledHome>
  );
}
