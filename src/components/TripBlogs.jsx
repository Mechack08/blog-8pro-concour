import styled from "styled-components";
import HeaderSections from "../ui/HeaderSections";
import Blog from "../ui/Blog";
import { blogs } from "../data/blogs";

const StyledTripBlogs = styled.section`
  margin: 6.4rem 0 0;
`;

const TripsBlogsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));
  gap: 2.4rem;
  margin-top: 4.8rem;
`;

export default function TripBlogs() {
  return (
    <StyledTripBlogs>
      <HeaderSections
        titles={{
          main: "Travel Trips",
          sub: "All you need to know before traveling",
          link: "/",
        }}
        size="big"
        color="dark"
      />
      <TripsBlogsBody>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} fixedSizeImg={true} height="30rem" />
        ))}
      </TripsBlogsBody>
    </StyledTripBlogs>
  );
}
