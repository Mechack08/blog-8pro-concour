/* eslint-disable react/prop-types */
import styled from "styled-components";
import { subString } from "../utils/utils";

const StyledBlogHorizontal = styled.div`
  /* display: flex;
  gap: 2.4rem; */

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
  gap: 2.4rem;
`;

const ImageWrapper = styled.div`
  max-height: 40rem;
`;

const Details = styled.div`
  margin-top: 3.2rem;
`;

const BlogCategories = styled.ul`
  color: var(--color-primary-0);
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    color: var(--color-text);
  }
`;

const BlogTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: 1.1px;
  line-height: 1.6;
  text-transform: capitalize;
  transition: all 0.3s;
`;

const BlogText = styled.p`
  margin: 2.4rem 0;
`;

const BlogPublish = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-transform: uppercase;
  font-size: 1.2rem;

  margin-top: 3.2rem;
`;

const Discover = styled.div`
  color: var(--color-primary-0);
  text-align: right;
  margin-top: 8rem;
`;

export default function BlogHorizontal({ blog }) {
  return (
    <StyledBlogHorizontal>
      <ImageWrapper>
        <img src={blog.img} alt={blog.title} />
      </ImageWrapper>
      <Details>
        <BlogCategories>
          {blog.categories.map((cat) => (
            <li key={cat}>
              <span>#</span>
              <a href="/">{cat}</a>
            </li>
          ))}
        </BlogCategories>
        <BlogTitle>
          <a href="/">{blog.title}</a>
        </BlogTitle>
        <BlogPublish>
          <p>{blog.publish.author}</p>
          &ndash;
          <p>{blog.publish.date}</p>
        </BlogPublish>
        <BlogText>{subString(blog.desc)}</BlogText>

        <Discover>
          <a href="/">Read More &rarr;</a>
        </Discover>
      </Details>
    </StyledBlogHorizontal>
  );
}
