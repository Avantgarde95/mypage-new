import React from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaChevronLeft, FaHome } from "react-icons/fa";

import { Language } from "types/Language";
import { ROUTES } from "constants/Routes";
import { languageState } from "states/Language";

const languageSymbols: Array<[Language, string]> = [
  ["Korean", "가"],
  ["English", "A"],
];

const Footer = () => {
  const router = useRouter();
  const [currentLanguage, setLanguage] = useRecoilState(languageState);

  const handleClickLanguage = () => {
    setLanguage(currentLanguage === "Korean" ? "English" : "Korean");
  };

  const handleClickHome = () => {
    router.push(ROUTES.home);
  };

  const handleClickBack = () => {
    router.back();
  };

  return (
    <Container>
      <Button title="언어 변경 Change language" onClick={handleClickLanguage}>
        {languageSymbols.map(([language, symbol]) => (
          <LanguageSymbol
            key={language}
            isSelected={currentLanguage === language}
          >
            {symbol}
          </LanguageSymbol>
        ))}
      </Button>
      <Button title="홈 Home" onClick={handleClickHome}>
        <FaHome />
      </Button>
      <Button title="뒤로 Back" onClick={handleClickBack}>
        <FaChevronLeft />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  overflow-y: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  padding: 0.2rem 0;
`;

const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s;

  width: 3rem;
  height: 2.5rem;
  border: none;
  font-size: 2rem;

  color: ${({ theme }) => theme.color.white};
  background-color: transparent;

  &:hover {
    transform: scale(0.8);
  }
`;

interface LanguageSymbolProps {
  isSelected: boolean;
}

const LanguageSymbol = styled.span<LanguageSymbolProps>`
  position: absolute;

  top: 1rem;
  left: 1rem;
  width: 2rem;
  line-height: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  transition: top 0.5s, left 0.5s;

  color: ${({ theme }) => theme.color.gray};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      z-index: 1;

      top: 0;
      left: 0;

      color: ${theme.color.white};
    `}
`;

export default Footer;
