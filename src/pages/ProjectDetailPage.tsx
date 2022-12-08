import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ApkIcon, GithubIcon, MacIcon, ProjectExampleImg, WindowIcon } from "../assets/assets";
import DescribeBox from "../components/common/DescribeBox";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Profiles from "../components/common/Profiles";
import VideoFrame from "../components/common/VideoFrame";

interface iDetailData {
  projectId: number;
  title: string;
  youtubeUrl: string;
  description: string;
  developers: string[];
  downloadOptions: Array<
    | { name: "apk"; url: string; icon: string }
    | { name: "mac"; url: string; icon: string }
    | { name: "window"; url: string; icon: string }
    | { name: "github"; url: string; icon: string }
  >;
}

const downloadIcons = {
  apk: ApkIcon,
  mac: MacIcon,
  window: WindowIcon,
  github: GithubIcon,
};
const detailDatas: iDetailData[] = [
  {
    projectId: 1,
    title: "프로젝트1",
    youtubeUrl: "",
    description: "프로젝트1 설명",
    developers: ["a", "b", "c", "d", "e"],
    downloadOptions: [
      {
        name: "github",
        url: "https://github.com/ilmerry",
        icon: `${downloadIcons.github}`,
      },
    ],
  },
];

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(
    detailDatas.filter((data) => data.projectId.toString() === projectId)[0],
  );
  const navigate = useNavigate();

  return (
    <ProjectWrapper>
      <Header margin={4.5}>
        <h1>{currentProject.title}</h1>
      </Header>
      <VideoFrame />
      <DescribeBox>{currentProject.description}</DescribeBox>
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
`;

const Icon = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  cursor: pointer;
`;
