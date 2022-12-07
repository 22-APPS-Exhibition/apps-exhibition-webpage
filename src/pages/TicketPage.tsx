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
`;

const TicketContainer = styled.section`
  display: flex;
  justify-content: center;

  width: 160rem;
  height: 64rem;

  font-family: "Archivo";
  color: black;
`;
