import React, { useState } from "react";
import styled from "styled-components";
import { MapImg, InfoImg, TicketImg, RedPinImg, YellowPinImg } from "../assets/assets";
import MapModal from "../components/mapPage/MapModal";
import ModalPortal from "../components/mapPage/ModalPortal";

interface iPinProps {
  position: { x: number; y: number };
}

export default function MapPage() {
  const [modalOpen, setModalOpen] = useState<boolean>();

  return (
    <MapWrapper>
      <Header>
        <InfoLink href="/intro">
          <img src={InfoImg} alt="소개페이지 아이콘" />
          Information
        </InfoLink>
        <ProjectsLink href="/projects">
          <img src={TicketImg} alt="프로젝트 아카이빙 아이콘" />
          Archiving Projects
        </ProjectsLink>
      </Header>
      <MapContainer>
        <img src={MapImg} alt="지도 이미지" />
        <Pin position={{ x: -65, y: -25 }} onClick={() => setModalOpen(true)}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: -45, y: -50 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: -78, y: -38 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: -50, y: 10 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: -45, y: 30 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>

        <Pin position={{ x: -10, y: -10 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 5, y: 20 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 10, y: 0 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>

        <Pin position={{ x: 4, y: -47 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 22, y: -13 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 33, y: -30 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 63, y: -15 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 70, y: -43 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>

        <Pin position={{ x: 68, y: 30 }}>
          <img src={RedPinImg} alt="지도 표시" />
        </Pin>
        <Pin position={{ x: 84, y: 28 }}>
          <img src={YellowPinImg} alt="지도 표시" />
        </Pin>
      </MapContainer>
      {modalOpen && (
        <ModalPortal closePortal={() => setModalOpen(false)}>
          <MapModal onClose={() => setModalOpen(false)} />
        </ModalPortal>
      )}
    </MapWrapper>
  );
}

const MapWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 4rem 6.4rem;
  z-index: 10;
`;

const InfoLink = styled.a`
  font-size: 3.5rem;
  line-height: 4.1rem;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: white;
  > img {
    height: 2.4rem;
    margin-right: 2rem;
  }
`;

const ProjectsLink = styled(InfoLink)`
  margin-left: 3.6rem;
`;

const MapContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    z-index: -1;
  }
`;

const Pin = styled.article<iPinProps>`
  position: absolute;
  transform: translate(${({ position }) => position.x}rem, ${({ position }) => position.y}rem);

  cursor: pointer;
  > img {
    height: 8.5rem;
    width: 6.5rem;
  }
`;
