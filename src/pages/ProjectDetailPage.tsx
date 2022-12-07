import React from "react";
import styled from "styled-components";
import { ProjectExampleImg } from "../assets/assets";
import DescribeBox from "../components/common/DescribeBox";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Profiles from "../components/common/Profiles";
import VideoFrame from "../components/common/VideoFrame";

export default function ProjectDetailPage() {
  return (
    <ProjectWrapper>
      <Header margin={4.5}>
        <h1>작품제목</h1>
      </Header>
      <VideoFrame />
      <DescribeBox>
        Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor dui nec dui rutrum,
        in commodo sapien rhoncus. Proin non felis et ligula blandit consectetur vitae ac dolor. Donec in metus id leo
        fringilla interdum vitae eget nibh. Mauris aliquam lacus nec tristique molestie. In ornare lectus non nibh
        porttitor, in ullamcorper tortor vestibulum. Nullam in magna faucibus, viverra ligula sit amet, laoreet augue.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ante consequat, elementum nisl sit amet,
        vulputate sem. Maecenas laoreet mauris vitae erat ultrices fermentum. Nam in urna ac tortor consequat
        pellentesque. Pellentesque vulputate metus nec augue varius, non rutrum massa mattis. Duis tincidunt risus et
        tempor maximus. Phasellus vulputate sapien vitae consectetur cursus. Donec malesuada felis vel cursus posuere.
        Donec eu nunc maximus erat viverra fermentum sed ut augue. Aliquam ut ante sollicitudin, lacinia lectus tempor,
        maximus mi.
      </DescribeBox>
      <Profiles
        title="Developers"
        profileList={["은형", "정현", "예린", "고은", "수연"]}
        profileSize={22}
        center={true}>
        <DownloadContainer>
          <DownloadTitle>Download</DownloadTitle>
          <Icons>
            <Icon src={ProjectExampleImg} />
            <Icon src={ProjectExampleImg} />
            <Icon src={ProjectExampleImg} />
            <Icon src={ProjectExampleImg} />
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 3rem;
  margin-top: 4.5rem;
`;

const Icon = styled.img`
  width: 20rem;
  height: 20rem;
  background: #d9d9d9;
  border-radius: 50%;
`;
