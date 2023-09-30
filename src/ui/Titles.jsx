import styled, { css } from "styled-components";

const Titles = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;

  ${(props) =>
    props.size === "bigest" &&
    css`
      font-size: 4.8rem;
      font-weight: 900;
    `}

  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 3.2rem;
      font-weight: 900;
      letter-spacing: 0.88px;
    `}

    ${(props) =>
    props.size === "small" &&
    css`
      font-size: 1.6rem;
      letter-spacing: 0.8px;
    `}
`;

export default Titles;
