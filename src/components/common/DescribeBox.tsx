import React, { ReactNode } from "react";
import styled from "styled-components";

const DescribeBox = ({ children }: any) => {
  return <StDescribeBox>{children}</StDescribeBox>;
};

const StDescribeBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20rem 6.7rem;
  background: #91adff;
  border: 3rem solid #ccd5ff;
  border-radius: 5rem;
  color: black;
  width: 160rem;
  line-height: 20px; // 이서영이 건드린거
  letter-spacing: 0.1em;
  white-space: pre-wrap;

  p {
    font-weight: 400;
    font-size: 4rem;
    line-height: 6rem;
    letter-spacing: 0.1em;
  }
`;

export default DescribeBox;
