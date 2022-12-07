import React from "react";
import styled from "styled-components";
import DescribeBox from "../components/common/DescribeBox";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Profiles from "../components/common/Profiles";
import VideoFrame from "../components/common/VideoFrame";

export default function IntroPage() {
  const name = localStorage.getItem("username") ?? "guest";
  return (
    <IntroWrapper>
      <Header margin={4.5}>
        <h1>Welcome {name}!</h1>
      </Header>
      <VideoFrame />
      <DescribeBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor dui nec dui rutrum, in commodo
        sapien rhoncus. Proin non felis et ligula blandit consectetur vitae ac dolor. Donec in metus id leo fringilla
        interdum vitae eget nibh. Mauris aliquam lacus nec tristique molestie. In ornare lectus non nibh porttitor, in
        ullamcorper tortor vestibulum. Nullam in magna faucibus, viverra ligula sit amet, laoreet augue.
      </DescribeBox>
      <Profiles title="2022 Sookmyung APPS MEMBER" profileList={["은형"]} profileSize={24} center={false} />
      <Footer />
    </IntroWrapper>
  );
}

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 16rem;

  font-family: "Archivo";
`;
