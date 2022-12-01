import React from "react";
import styled from "styled-components";
import { QRCodeImg } from "../assets/assets";

export default function TicketPage() {
  return (
    <TicketContainer>
      <TicketLeft>
        <Title>Apps Air</Title>
        <Subtitle>
          <div>From Seoul</div>
          <div>To Apps</div>
        </Subtitle>
        <Passenger>
          <Name>Passenger Name</Name>
          <NameForm>
            <NameInput type="text" placeholder="이름을 넣어주세요." />
            <NameButton type="button">Go !</NameButton>
          </NameForm>
        </Passenger>
      </TicketLeft>
      <TicketRight>
        <QRCode src={QRCodeImg} />
        <TimeWrapper>
          <div>Thurs 22 Dec</div>
          <div>18:00</div>
        </TimeWrapper>
      </TicketRight>
    </TicketContainer>
  );
}

const TicketContainer = styled.article`
  display: flex;

  font-family: "Archivo";
  color: black;
`;

const TicketLeft = styled.div`
  width: 70%;
  padding: 4.4rem 8.3rem 5.6rem 12.8rem;
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
  background-color: white;
`;

const Title = styled.h1`
  margin-top: 6.4rem;

  font-weight: 800;
  font-size: 6.4rem;
  line-height: 7rem;
`;

const Subtitle = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3.9rem;
  margin-right: 5.6rem;

  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.2rem;
`;

const Passenger = styled.footer`
  margin-top: 10.2rem;
`;

const Name = styled.label`
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.2rem;
`;

const NameForm = styled.form`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 3.3rem;
  margin-bottom: 6.6rem;
  margin-right: 8.3rem;
`;

const NameInput = styled.input`
  width: 64rem;
  height: 6.4rem;
  margin-right: 3.2rem;
  padding-left: 2.4rem;
  border: 0.2rem solid #000000;
  border-radius: 2rem;

  font-weight: 400;
  font-size: 32px;
  line-height: 35px;

  cursor: pointer;
`;

const NameButton = styled.button`
  //width: 1.8rem;
  padding: 1.5rem 5.1rem;

  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 0.1em;

  background: #04d7a2;
  border: 0;
  border-radius: 2rem;

  cursor: pointer;
`;

const TicketRight = styled.div`
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
  font-size: 48px;
  line-height: 52px;

  div:first-child {
    margin-bottom: 1.8rem;
  }
`;
