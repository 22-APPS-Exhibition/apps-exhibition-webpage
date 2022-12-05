import React from "react";
import styled from "styled-components";
import DescribeBox from "../components/common/DescribeBox";
import Header from "../components/common/Header";

export default function IntroPage() {
  return (
    <IntroWrapper>
      <Header margin={4.5}>
        <h1>Welcome 이름!</h1>
      </Header>
      {/* 쿠키 이슈
      <VideoFrame
        src="https://www.youtube.com/embed/sqwiXUv0XkM?autoplay=1&mute=1&loop=1"
        title="YouTube video player"
      /> */}
      <VideoFrame />
      <DescribeBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor dui nec dui rutrum, in commodo
        sapien rhoncus. Proin non felis et ligula blandit consectetur vitae ac dolor. Donec in metus id leo fringilla
        interdum vitae eget nibh. Mauris aliquam lacus nec tristique molestie. In ornare lectus non nibh porttitor, in
        ullamcorper tortor vestibulum. Nullam in magna faucibus, viverra ligula sit amet, laoreet augue.
      </DescribeBox>
      <MembersContainer>
        <MembersHeader>2022 Sookmyung APPS MEMBER</MembersHeader>
      </MembersContainer>
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

const VideoFrame = styled.iframe`
  width: 160rem;
  height: 72rem;
  margin-top: 6rem;
  margin-bottom: 34rem;

  background: black;
  border-radius: 5rem;
`;

const MembersContainer = styled.section`
  width: 100%;
  background: white;
`;

const MembersHeader = styled.header`
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 7rem;
  color: black;
`;
