import React from "react";
import styled from "styled-components";
import { QRCodeImg } from "../../assets/assets";

export default function TicketRight() {
  return (
    <TicketRightContainer>
      <QRCode src={QRCodeImg} />
      <TimeWrapper>
        <div>Thurs 22 Dec</div>
        <div>18:00</div>
      </TimeWrapper>
    </TicketRightContainer>
  );
}

const TicketRightContainer = styled.article`
  width: 100%;
  padding: 9rem 11rem;
  padding-bottom: 0;

  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  background-color: #ccd5ff;
`;

const QRCode = styled.img`
  width: 32rem;
  height: 32rem;
`;

const TimeWrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.2rem;

  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.2rem;

  div:first-child {
    margin-bottom: 1.8rem;
  }
`;
