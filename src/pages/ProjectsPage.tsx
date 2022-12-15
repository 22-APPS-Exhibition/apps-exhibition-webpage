import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppsLogo, ProjectExampleImg } from "../assets/assets";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

interface iProjectsDatas {
  projectId: number;
  thumbnail: string;
  projectName: string;
  teamName: string;
  category: "유니티" | "웹/앱" | "유니티 기초";
}

const projectDatas: iProjectsDatas[] = [
  {
    projectId: 1,
    thumbnail: `${ProjectExampleImg}`,
    projectName: "프로젝트1",
    teamName: "팀1",
    category: "유니티",
  },
  {
    projectId: 2,
    thumbnail: `${ProjectExampleImg}`,
    projectName: "프로젝트2",
    teamName: "팀2",
    category: "웹/앱",
  },
  {
    projectId: 3,
    thumbnail: `${ProjectExampleImg}`,
    projectName: "프로젝트3",
    teamName: "팀3",
    category: "유니티",
  },
  {
    projectId: 4,
    thumbnail: `${ProjectExampleImg}`,
    projectName: "프로젝트4",
    teamName: "팀4",
    category: "유니티 기초",
  },
];

export default function ProjectsPage() {
  const categories = ["유니티", "웹/앱", "유니티 기초"];
  const [activeCat, setActiveCat] = useState("전체");
  const [filteredData, setFilteredData] = useState(projectDatas);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(activeCat === "전체" ? projectDatas : projectDatas.filter((data) => data.category === activeCat));
  }, [activeCat]);

  return (
    <ArchiveWrapper>
      <Header margin={11}>
        <LogoContainer>
          <img src={AppsLogo} alt="앱스 로고" />
          <h1>APPS</h1>
        </LogoContainer>
      </Header>
      <FiltersContainer>
        {categories.map((category, index) => (
          <FilterButton
            key={index}
            isActive={activeCat === category || activeCat === "전체" ? true : false}
            value={category}
            onClick={(e) => {
              // setActiveCat((prev) =>
              //   e.currentTarget && prev === e.currentTarget.value ? "전체" : e.currentTarget.value,
              // );
              setActiveCat(e.currentTarget.value);
            }}>
            {category}
          </FilterButton>
        ))}
      </FiltersContainer>
      <ProjectsContainer>
        {filteredData.map(({ projectId, thumbnail, projectName, teamName }) => (
          <Project key={projectId} onClick={() => navigate(`/projects/${projectId}`)}>
            <img src={thumbnail} alt="프로젝트 이미지" />
            <div>
              <p>{projectName}</p>
              <p>{teamName}</p>
            </div>
          </Project>
        ))}
      </ProjectsContainer>
      <Footer />
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

const FilterButton = styled.button<{ isActive: boolean }>`
  width: 25rem;
  height: 10rem;
  background: ${({ isActive }) => (isActive ? "#04D7A2" : "#c2c2c2")};
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
  cursor: pointer;
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
