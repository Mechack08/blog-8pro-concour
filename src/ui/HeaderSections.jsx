/* eslint-disable react/prop-types */
import styled from "styled-components";
import Titles from "./Titles";

const SyledHeaderSections = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--color-primary-0);
  }
`;

const TitlesWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export default function HeaderSections({ titles, color, size }) {
  return (
    <SyledHeaderSections>
      <TitlesWraper>
        <Titles color={color} size={size}>
          {titles.main}
        </Titles>
        <h6>{titles.sub}</h6>
      </TitlesWraper>
      <a href={titles.link}>More in {titles.main} &rarr;</a>
    </SyledHeaderSections>
  );
}
