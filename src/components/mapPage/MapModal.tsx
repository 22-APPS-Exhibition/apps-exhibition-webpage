import React from "react";
import styled from "styled-components";

export default function MapModal({ onClose }: any) {
  return (
    <Modal>
      <ModalBackground role="presentation" onClick={onClose} />
      <ModalContent>
        <ModalContentMain>모달내용</ModalContentMain>
        <ModalContentClose>
          <Button onClick={onClose}>닫기</Button>
        </ModalContentClose>
      </ModalContent>
    </Modal>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  background: red;
  width: 100px;
  height: 100px;
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  width: 300px;
  padding: 10px 0px;
  border: 0;
  border-radius: 5px;
  background: white;
`;

const ModalContentClose = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;

const ModalContentMain = styled.div`
  display: flex;

  padding: 1rem;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

const Button = styled.div`
  padding: 5px 20px;

  border: 0;
  border-radius: 5px;
  background-color: orange;

  cursor: pointer;
`;
