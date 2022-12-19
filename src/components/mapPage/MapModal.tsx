import { motion, Variants } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackButtonIcon } from "../../assets/assets";

interface iMapProps {
  onClose: () => void;
  projectId: number;
}

export default function MapModal({ onClose, projectId }: iMapProps) {
  const navigate = useNavigate();
  const modalVariants: Variants = {
    from: {
      opacity: 0,
      y: 50,
    },
    to: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <Modal>
      <ModalBackground role="presentation" onClick={onClose} />
      <ModalContent initial="from" animate="to" variants={modalVariants}>
        <ModalContentHeader>
          <h1>Lorem</h1>
          <button onClick={() => navigate(`/projects/${projectId}`)}>
            <img src={BackButtonIcon} alt="뒤로가기 버튼" />
          </button>
        </ModalContentHeader>
        <ModalVideo />
        <ModalFooter>Vestibulum porttitor dui nec dui</ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const Modal = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled(motion.article)`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 75rem;
  min-height: 50rem;
  padding: 0 7.5rem;
  background: #91adff;
  border: 3rem solid #ccd5ff;
  border-radius: 5rem;
  z-index: 10;
`;

const ModalContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 6.4rem;
  > h1 {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4rem;
    color: black;
  }
  > button {
    background: transparent;
    border: 0;
    cursor: pointer;
    > img {
      width: 6rem;
      height: 5rem;
    }
  }
`;

const ModalVideo = styled.iframe`
  margin-top: 3.2rem;
  width: 100%;

  background: white;
  border-radius: 2rem;
`;

const ModalFooter = styled.footer`
  display: flex;
  justify-content: left;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 7.8rem;
  margin-left: 5rem;
  font-family: "Archivo";
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.6rem;
  letter-spacing: 0.1em;

  color: #000000;
`;

const ModalBackground = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
