import React from "react";
import styled from "styled-components";

export default function ErrorPage() {
  return <ErrorWrapper>올바르지 않은 경로입니다</ErrorWrapper>;
}

const ErrorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 4rem;
`;
