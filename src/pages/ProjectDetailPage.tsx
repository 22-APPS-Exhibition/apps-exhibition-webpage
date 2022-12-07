import React from "react";
import styled from "styled-components";
import DescribeBox from "../components/common/DescribeBox";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
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
      <DetailContainer></DetailContainer>
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

const DetailContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 23.4rem 6.4rem;
  margin-top: 20rem;
  padding: 19.3rem 16.8rem;

  border-radius: 5rem;
  background-color: white;
`;

// detail box, video 공용으로 빼기
