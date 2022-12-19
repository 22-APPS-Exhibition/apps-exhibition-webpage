import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Airplane from "../components/common/Airplane";

export default function LoadingPage() {
  const planeVariants: Variants = {
    from: {
      y: 10,
    },
    to: {
      y: -10,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const dotVariants: Variants = {
    hidden: {
      opacity: 0.5,
      y: 0,
    },
    visible: (i) => ({
      opacity: 1,
      y: -15,
      transition: {
        delay: i * 0.2,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/map");
    }, 4000);
  }, []);

  return (
    <LoadingWrapper>
      <PlaneContainer variants={planeVariants} initial="from" animate="to">
        <Airplane />
      </PlaneContainer>
      {"Loading".split("").map((dot, i) => (
        <LoadingMsg key={i} initial="hidden" animate="visible" variants={dotVariants} custom={i}>
          {dot}
        </LoadingMsg>
      ))}
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled(motion.section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100vh;

  padding: 0 16rem;
`;

const PlaneContainer = styled(motion.article)``;

const LoadingMsg = styled(motion.h1)`
  font-size: 10rem;
  letter-spacing: 2rem;
`;
