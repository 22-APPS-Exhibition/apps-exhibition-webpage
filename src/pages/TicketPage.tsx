import React from "react";
import styled from "styled-components";
import TicketLeft from "../components/ticketPage/TicketLeft";
import TicketRight from "../components/ticketPage/TicketRight";

export default function TicketPage() {
  return (
    <TicketWrapper>
      <TicketContainer>
        <TicketLeft />
        <TicketRight />
      </TicketContainer>
    </TicketWrapper>
  );
}

const TicketWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  /* @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    width: 800px;
  }
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    width: 700px;
  } */
`;

const TicketContainer = styled.article`
  display: flex;
  justify-content: center;

  width: 160rem;
  height: 64rem;

  font-family: "Archivo";
  color: black;
`;
