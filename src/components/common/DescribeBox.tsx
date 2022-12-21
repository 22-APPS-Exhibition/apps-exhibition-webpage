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
  p {
    font-weight: 400;
    font-size: 4rem;
    line-height: 6rem;
    letter-spacing: 0.1em;
  }
`;

export default DescribeBox;
