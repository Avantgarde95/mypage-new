import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { darken } from "polished";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  FaCode,
  FaFacebookSquare,
  FaFileAlt,
  FaGithub,
  FaIdCard,
  FaInstagram,
  FaLaptopCode,
  FaMusic,
  FaNewspaper,
  FaYoutube,
} from "react-icons/fa";

import { Language } from "types/Language";
import { languageState } from "states/Language";
import Grid from "components/Grid";
import NextLink from "components/NextLink";
import { createNeonBorderStyle } from "styles/Effects";

const Content = () => {
  const language = useRecoilValue(languageState);

  return (
    <Container>
      <StyledGrid cellWidth="7rem" cellHeight="8rem" maxDimensionX={5}>
        {apps.map(({ nameMap, url, color, icon }) => (
          <Cell key={url}>
            <StyledLink
              href={url}
              title={Object.values(nameMap).join(" ")}
              style={{ color }}
            >
              {icon}
            </StyledLink>
            {nameMap[language]}
          </Cell>
        ))}
      </StyledGrid>
    </Container>
  );
};

const apps: Array<{
  nameMap: Record<Language, string>;
  url: string;
  color: string;
  icon: ReactNode;
}> = [
  {
    nameMap: { Korean: "소개", English: "About" },
    url: "/about",
    color: "#4ca9fe",
    icon: <FaIdCard />,
  },
  {
    nameMap: { Korean: "이력", English: "CV" },
    url: "/cv",
    color: "#aaaaaa",
    icon: <FaFileAlt />,
  },
  {
    nameMap: { Korean: "프로젝트", English: "Projects" },
    url: "/project",
    color: "#ac9292",
    icon: <FaLaptopCode />,
  },
  {
    nameMap: { Korean: "음악", English: "Musics" },
    url: "/music",
    color: "#1cb81d",
    icon: <FaMusic />,
  },
  {
    nameMap: { Korean: "블로그", English: "Blog" },
    url: "https://Avantgarde95.github.io/blog",
    color: "#a2b09f",
    icon: <FaNewspaper />,
  },
  {
    nameMap: { Korean: "코드", English: "Code" },
    url: "https://github.com/Avantgarde95/Avantgarde95.github.io",
    color: "#a4b353",
    icon: <FaCode />,
  },
  {
    nameMap: { Korean: "깃허브", English: "GitHub" },
    url: "https://github.com/Avantgarde95",
    color: "#f0f6fc",
    icon: <FaGithub />,
  },
  {
    nameMap: { Korean: "유튜브", English: "YouTube" },
    url: "https://www.youtube.com/user/Scottparkmusic",
    color: "#ff0000",
    icon: <FaYoutube />,
  },
  {
    nameMap: { Korean: "페이스북", English: "Facebook" },
    url: "https://www.facebook.com/s.ramanujan",
    color: "#1877f2",
    icon: <FaFacebookSquare />,
  },
  {
    nameMap: { Korean: "인스타그램", English: "Instagram" },
    url: "https://www.instagram.com/hunminpark95",
    color: "#d1599d",
    icon: <FaInstagram />,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: auto;

  width: 100%;
  height: 100%;
`;

const gridAnimation = keyframes`
    0% {
        transform: scale(0.9);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const StyledGrid = styled(Grid)`
  animation: ${gridAnimation} 0.3s forwards;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const StyledLink = styled(NextLink)`
  cursor: pointer;
  transition: transform 0.1s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  border: 2px solid ${({ theme }) => theme.color.white};

  ${({ theme }) =>
    createNeonBorderStyle(
      darken(0.2, theme.color.white),
      darken(0.1, theme.color.white),
      "6px",
      "8px"
    )}

  &:hover {
    transform: scale(0.85);
  }
`;

export default Content;
