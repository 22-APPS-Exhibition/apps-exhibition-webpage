import React from "react";
import styled from "styled-components";
import TicketLeft from "../components/ticketPage/TicketLeft";
import TicketRight from "../components/ticketPage/TicketRight";

export default function TicketPage() {
  return (
    <TicketContainer>
      <TicketLeft />
      <TicketRight />
    </TicketContainer>
  );
}

const TicketContainer = styled.section`
  display: flex;
  justify-content: center;

  width: 160rem;
  height: 64rem;

  font-family: "Archivo";
  color: black;
`;
