import styled from "styled-components";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Container from "../ui/Container";
import RecentBlogs from "../components/RecentBlogs";
import TechBlogs from "../components/TechBlogs";

const StyledHome = styled.main``;

const BlogsByCategory = styled.main`
  background-color: var(--color-white);
  padding: 8rem 0 6.4rem;
`;

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Welcome />
      <Container>
        <RecentBlogs />
      </Container>
      <BlogsByCategory>
        <Container>
          <TechBlogs />
        </Container>
      </BlogsByCategory>
    </StyledHome>
  );
}
