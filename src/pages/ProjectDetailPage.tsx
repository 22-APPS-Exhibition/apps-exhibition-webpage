import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ApkIcon, GithubIcon, MacIcon, ProjectExampleImg, WindowIcon } from "../assets/assets";
import DescribeBox from "../components/common/DescribeBox";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Profiles from "../components/common/Profiles";
import VideoFrame from "../components/common/VideoFrame";
import { projectDatas } from "../util/data";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(projectDatas[parseInt(projectId!) - 1]);

  return (
    <ProjectWrapper>
      <Header margin={4.5}>
        <h1>{currentProject.projectName}</h1>
      </Header>
      <VideoFrame url={currentProject.youtubeUrl} />
      <DescribeBox>
        <p>{currentProject.description}</p>
      </DescribeBox>
      <Profiles title="Developers" profileList={currentProject.developers} profileSize={22} center={true}>
        <DownloadContainer>
          <DownloadTitle>Download</DownloadTitle>
          <Icons>
            {currentProject.downloadOptions.map((option, index) => (
              <a key={index} href={option.url}>
                <Icon src={option.icon} />
              </a>
            ))}
          </Icons>
        </DownloadContainer>
      </Profiles>
      <Footer />
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 16rem;

  font-family: "Archivo";
`;

const DownloadContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 8.5rem;
`;

const DownloadTitle = styled.header`
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 7rem;
  color: black;
`;

const Icons = styled.section`
  display: flex;
  margin-top: 4.5rem;
  a: nth-child(2) {
    margin-left: 3rem;
  }
`;

const Icon = styled.img`
  width: 20rem;
  height: 20rem;
  cursor: pointer;
  object-fit: contain;
`;
