import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ProjectExampleImg } from "../../assets/assets";

interface iProfilesProps {
  children?: JSX.Element | JSX.Element[];
  title: string;
  profileList: Array<{
    name: string;
    image: string;
  }>;
  profileSize: number;
  center: boolean;
}

export default function Profiles({ children, title, profileList, profileSize, center }: iProfilesProps) {
  return (
    <StProfilesContainer center={center}>
      <StHeader>{title}</StHeader>
      <StProfiles cnt={profileList.length}>
        {profileList.map(({ name, image }, index) => (
          <StProfile key={index} size={profileSize}>
            <img src={image} alt="프로필 이미지" />
            <p>{name}</p>
          </StProfile>
        ))}
      </StProfiles>
      {children}
    </StProfilesContainer>
  );
}

const StProfilesContainer = styled.section<{ center: boolean }>`
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    `}
  width: 160rem;
  margin-top: 20rem;
  padding: 12rem;
  padding-bottom: 21rem;
  background: white;
  border-radius: 5rem;
`;
const StProfiles = styled.section<{ cnt: number }>`
  // 이서영이 건드린거
  display: grid;
  grid-template-columns: ${({ cnt }) => `repeat(${cnt > 8 ? 5 : cnt === 8 ? 4 : cnt === 6 ? 6 : cnt}, 1fr);`};
  grid-gap: 13rem 3rem;

  margin-top: 13rem;
`;

const StHeader = styled.header`
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 7rem;
  color: black;
`;

const StProfile = styled.article<{ size: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    border-radius: 50%;
    object-fit: contain;
  }
  > p {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.4rem;
    color: black;
    margin-top: 4rem;
  }
`;
