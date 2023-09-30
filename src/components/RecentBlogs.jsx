import styled from "styled-components";
import Titles from "../ui/Titles";
import Blog from "../ui/Blog";
import { blogs } from "../data/blogs";
import Button from "../ui/Button";

const StyledRecentBlog = styled.section`
  padding-top: 9.6rem;
`;

const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  h2 {
    color: var(--color-text);
  }
`;

const Blogs = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 2.4rem;
  margin-top: 6.4rem; */

  margin-top: 6.4rem;
  columns: 3;
  column-gap: 2.4rem;
`;

const RecentBlogButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.8rem 0;
`;

export default function RecentBlogs() {
  return (
    <StyledRecentBlog>
      <TitlesWrapper>
        <Titles size="big" as="h2">
          Recent Blogs
        </Titles>
        <h6>Most Recent and awersome Blogs from 8pro to read</h6>
      </TitlesWrapper>
      <Blogs>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} />
        ))}
      </Blogs>
      <RecentBlogButtonWrapper>
        <Button type="primary">Discover more</Button>
      </RecentBlogButtonWrapper>
    </StyledRecentBlog>
  );
}
