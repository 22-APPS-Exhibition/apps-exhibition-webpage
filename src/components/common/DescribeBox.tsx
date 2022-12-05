import React from "react";
import styled from "styled-components";

const DescribeBox = ({ children }: any) => {
  return <StDescribeBox>{children}</StDescribeBox>;
};

const StDescribeBox = styled.article`
  display: flex;
  align-items: center;
  padding: 30rem 6.7rem;
  background: #91adff;
  border: 3rem solid #ccd5ff;
  border-radius: 5rem;
  color: black;
`;

export default DescribeBox;
