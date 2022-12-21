import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MapImg, InfoImg, TicketImg, RedPinImg, YellowPinImg } from "../assets/assets";
import Airplane from "../components/common/Airplane";
import MapModal from "../components/mapPage/MapModal";
import ModalPortal from "../components/mapPage/ModalPortal";

interface iPinProps {
  pinId: number;
  position: { x: number; y: number };
}

const pinPositions: iPinProps[] = [
  {
    pinId: 1,
    position: { x: -65, y: -25 },
  },
  {
    pinId: 2,
    position: { x: -45, y: -50 },
  },
  {
    pinId: 3,
    position: { x: -78, y: -38 },
  },
  {
    pinId: 4,
    position: { x: -50, y: 10 },
  },
  {
    pinId: 5,
    position: { x: -45, y: 30 },
  },
  {
    pinId: 6,
    position: { x: -10, y: -10 },
  },
  {
    pinId: 7,
    position: { x: 5, y: 20 },
  },
  {
    pinId: 8,
    position: { x: 10, y: 0 },
  },
  {
    pinId: 9,
    position: { x: 22, y: -13 },
  },
  {
    pinId: 10,
    position: { x: 33, y: -30 },
  },
  {
    pinId: 11,
    position: { x: 63, y: -15 },
  },
  {
    pinId: 12,
    position: { x: 70, y: -43 },
  },
];

export default function MapPage() {
  const [modalOpen, setModalOpen] = useState<boolean>();
  const [curPinId, setCurPinId] = useState<number>(0);
  const mapRef = useRef<HTMLImageElement>(null);

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
        <img src={MapImg} alt="지도 이미지" ref={mapRef} />
        {pinPositions.map((pin, index) => (
          <Pin
            position={pin.position}
            key={index}
            onClick={() => {
              setModalOpen(true);
              setCurPinId(pin.pinId);
            }}>
            <img src={RedPinImg} alt="지도 표시" />
          </Pin>
        ))}
        <Pin position={{ x: 80, y: 28 }}>
          <a href="https://sookmyung-apps.github.io">
            <img src={YellowPinImg} alt="지도 표시" />
          </a>
        </Pin>
        <Airplane constraintsRef={mapRef} />
      </MapContainer>
      {modalOpen && (
        <ModalPortal closePortal={() => setModalOpen(false)}>
          <MapModal onClose={() => setModalOpen(false)} projectId={curPinId} />
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
  a {
    font-size: 4.5rem;
    line-height: 4.1rem;
    letter-spacing: 0.1em;
    color: white;
  }
`;

const InfoLink = styled.a`
  font-size: 3.5rem;
  line-height: 4.1rem;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: white;
  > img {
    height: 3.5rem;
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

const Pin = styled.article<{ position: { x: number; y: number } }>`
  position: absolute;
  transform: translate(${({ position }) => position.x}rem, ${({ position }) => position.y}rem);

  cursor: pointer;
  img {
    height: 8.5rem;
    width: 6.5rem;
  }
`;
