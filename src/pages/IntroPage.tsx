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
        <p>
          APPS는 숙명여자대학교 게임, 앱, 웹 기획과 개발을 하는 동아리입니다. 소프트웨어 서비스 환경에서 필요한
          사용자인터페이스, 알고리즘 등을 공부하는 동아리로, 스터디를 통해 개발 관련 지식을 익히고 이를 바탕으로
          프로젝트를 진행하여 협업 경험도 쌓고 있습니다.
          <br />
          <br />
          주요 활동 내용은 모바일앱 설계, 개발을 중심으로 공모전, 연구과제를 준비하는 것이며, 기초가 되는 게임
          엔진(유니티, 언리얼 엔진), 모바일 (안드로이드, iOS, flutter), 웹 프론트엔드, 백엔드 등의 스터디를 진행합니다.
          그밖에 최신 IT기술 동향을 공부하고, 지도교수님, 선후배들 간의 활발한 교류를 통하여 전문 SW 엔지니어의 소양을
          갖추는 것을 목적으로 하고 있습니다.
        </p>
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
