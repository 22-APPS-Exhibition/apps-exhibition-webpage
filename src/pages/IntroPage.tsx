import React from "react";
import styled from "styled-components";
import { ProjectExampleImg } from "../assets/assets";
import DescribeBox from "../components/common/DescribeBox";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import VideoFrame from "../components/common/VideoFrame";

export default function IntroPage() {
  return (
    <IntroWrapper>
      <Header margin={4.5}>
        <h1>Welcome 이름!</h1>
      </Header>
      <VideoFrame />
      <DescribeBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor dui nec dui rutrum, in commodo
        sapien rhoncus. Proin non felis et ligula blandit consectetur vitae ac dolor. Donec in metus id leo fringilla
        interdum vitae eget nibh. Mauris aliquam lacus nec tristique molestie. In ornare lectus non nibh porttitor, in
        ullamcorper tortor vestibulum. Nullam in magna faucibus, viverra ligula sit amet, laoreet augue.
      </DescribeBox>
      <MembersContainer>
        <MembersHeader>2022 Sookmyung APPS MEMBER</MembersHeader>
        <ProfilesContainer>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
          <Profile>
            <img src={ProjectExampleImg} alt="프로필 이미지" />
            <p>Name</p>
          </Profile>
        </ProfilesContainer>
      </MembersContainer>
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

const MembersContainer = styled.section`
  width: 100%;
  max-width: 160rem;
  margin-top: 20rem;
  padding: 12rem;
  padding-bottom: 21rem;
  background: white;
  border-radius: 5rem;
`;

const MembersHeader = styled.header`
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 7rem;
  color: black;
`;

const ProfilesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 13rem 3rem;

  margin-top: 13rem;
`;

const Profile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 24rem;
    height: 24rem;
    background: #d9d9d9;
    border-radius: 50%;
  }
  > p {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.4rem;
    color: black;
    margin-top: 4rem;
  }
`;
