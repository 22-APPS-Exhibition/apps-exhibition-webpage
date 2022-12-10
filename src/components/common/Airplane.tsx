import { motion } from "framer-motion";
import { RefObject, useState } from "react";
import styled from "styled-components";
import { AirplaneImg } from "../../assets/assets";

interface iAirplaneProps {
  constraintsRef?: RefObject<HTMLImageElement>;
}

export default function Airplane({ constraintsRef }: iAirplaneProps) {
  const [isSpeech, setIsSpeech] = useState(constraintsRef ? true : false);

  if (constraintsRef) {
    // 드래그 가능한 비행기
    return (
      <AirplaneContainer drag dragConstraints={constraintsRef}>
        {isSpeech && <Speech>Drag Me!</Speech>}
        <StAirplane onClick={() => setIsSpeech(false)}>
          <img draggable={false} src={AirplaneImg} alt="비행기 이미지" />
        </StAirplane>
      </AirplaneContainer>
    );
  } else {
    // 드래그 불가능한 비행기
    return (
      <AirplaneContainer>
        {isSpeech && <Speech>Drag Me!</Speech>}
        <StAirplane>
          <img draggable={false} src={AirplaneImg} alt="비행기 이미지" />
        </StAirplane>
      </AirplaneContainer>
    );
  }
}

const AirplaneContainer = styled(motion.aside)`
  position: absolute;
  bottom: 10rem;
  right: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

const Speech = styled.div`
  font-size: 2rem;
`;

const StAirplane = styled(motion.div)`
  margin-top: 2rem;
  cursor: pointer;
  > img {
    width: 32rem;
    height: 20rem;
  }
`;
