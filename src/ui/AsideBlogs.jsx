/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useRevealContents } from "../hooks/useRevealContents";

const StyledAsideBlogs = styled.div`
  display: flex;
  gap: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  transform: translateX(5rem);
  opacity: 0;
  transition: all 0.6s;

  ${(props) =>
    props.visible &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`;

const ImageWrapper = styled.div`
  width: 12rem;
  height: 10rem;
  flex-shrink: 0;
`;

const BlogTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: 1.1px;
  line-height: 1.6;
  text-transform: capitalize;
  transition: all 0.3s;
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

const BlogPublish = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin-top: 0.8rem;
`;

const Details = styled.div``;

export default function AsideBlogs({ blog }) {
  const { isVisible, containerRef } = useRevealContents({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <StyledAsideBlogs ref={containerRef} visible={isVisible}>
      <ImageWrapper>
        <img src={blog.img} alt="" />
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
      </Details>
    </StyledAsideBlogs>
  );
}
