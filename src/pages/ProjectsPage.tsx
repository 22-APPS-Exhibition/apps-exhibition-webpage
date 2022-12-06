import React from "react";
import styled from "styled-components";
import { AppsLogo, ProjectExampleImg } from "../assets/assets";
import DescribeBox from "../components/common/DescribeBox";
import Header from "../components/common/Header";

export default function ProjectsPage() {
  return (
    <ArchiveWrapper>
      <Header margin={11}>
        <LogoContainer>
          <img src={AppsLogo} alt="앱스 로고" />
          <h1>APPS</h1>
        </LogoContainer>
      </Header>
      <FiltersContainer>
        <FilterButton>유니티</FilterButton>
        <FilterButton>웹/앱</FilterButton>
        <FilterButton>유니티 기초</FilterButton>
      </FiltersContainer>
      <ProjectsContainer>
        <Project>
          <img src={ProjectExampleImg} alt="프로젝트 이미지" />
          <div>
            <p>Work Name</p>
            <p>Developer Name</p>
          </div>
        </Project>
        <Project>
          <img src={ProjectExampleImg} alt="프로젝트 이미지" />
          <div>
            <p>Work Name</p>
            <p>Developer Name</p>
          </div>
        </Project>
        <Project>
          <img src={ProjectExampleImg} alt="프로젝트 이미지" />
          <div>
            <p>Work Name</p>
            <p>Developer Name</p>
          </div>
        </Project>
        <Project>
          <img src={ProjectExampleImg} alt="프로젝트 이미지" />
          <div>
            <p>Work Name</p>
            <p>Developer Name</p>
          </div>
        </Project>
        <Project>
          <img src={ProjectExampleImg} alt="프로젝트 이미지" />
          <div>
            <p>Work Name</p>
            <p>Developer Name</p>
          </div>
        </Project>
        <Project>
          <img src={ProjectExampleImg} alt="프로젝트 이미지" />
          <div>
            <p>Work Name</p>
            <p>Developer Name</p>
          </div>
        </Project>
      </ProjectsContainer>
      <Footer>
        <p>Copyright ⓒ APPS Since 2021 All Rights Reserved.</p>
        <p>Department APPS of SMWU</p>
      </Footer>
    </ArchiveWrapper>
  );
}

const ArchiveWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 16rem;

  font-family: "Archivo";
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 14rem;
    height: 14rem;
  }
`;

const FiltersContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11.4rem;
`;

const FilterButton = styled.button`
  width: 25rem;
  height: 10rem;
  background: #04d7a2;
  border-radius: 3rem;
  border: 0;
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.1em;
  color: white;
  cursor: pointer;

  :nth-child(2) {
    margin: 0 5rem;
  }
`;

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 23.4rem 6.4rem;
  //margin: 20rem 16rem;
  margin-top: 20rem;
  padding: 19.3rem 16.8rem;

  border-radius: 5rem;
  background-color: white;
`;

const Project = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;

  > img {
    width: 100%;
    height: 40rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 100%;
    height: 20rem;
    margin-top: 2.3rem;

    background: #91adff;
    border: 1rem solid #ccd5ff;
    border-radius: 2rem;

    > p {
      font-weight: 400;
      font-size: 3.6rem;
      display: flex;
      margin-left: 5rem;

      color: black;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 42rem;
  margin-bottom: 23.2rem;

  > p {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 0.1em;

    :first-child {
      margin-bottom: 5.2rem;
    }
  }
`;
