import { ReactNode } from "react";
import styled from "styled-components";
import { BackButtonIcon } from "../../assets/assets";

interface iHeaderProps {
  children: ReactNode;
  margin?: number;
}

const Header = ({ children, margin }: iHeaderProps) => {
  return (
    <StHeader marginTop={margin ?? 0}>
      {children}
      <StBackButton>
        <img src={BackButtonIcon} alt="뒤로가기 버튼" />
      </StBackButton>
    </StHeader>
  );
};

const StHeader = styled.header<{ marginTop: number }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ marginTop }) => marginTop}rem;
  h1 {
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 7rem;
    color: white;
  }
`;

const StBackButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  > img {
    height: 13.3rem;
    width: 16rem;
  }
`;

export default Header;
