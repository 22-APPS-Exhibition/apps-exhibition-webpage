import React from "react";
import styled from "styled-components";

export default function TicketLeft() {
  return (
    <TicketLeftContainer>
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
    </TicketLeftContainer>
  );
}

const TicketLeftContainer = styled.div`
  width: 100%;

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
  font-size: 3.2rem;
  line-height: 3.5rem;

  cursor: pointer;
`;

const NameButton = styled.button`
  //width: 1.8rem;
  padding: 1.5rem 5.1rem;

  font-weight: 700;
  font-size: 4rem;
  line-height: 4.4rem;
  letter-spacing: 0.1em;

  background: #04d7a2;
  border: 0;
  border-radius: 2rem;

  cursor: pointer;
`;
