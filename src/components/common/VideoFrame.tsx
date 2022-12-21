import React from "react";
import styled from "styled-components";

interface iVideoProps {
  url: string;
}

export default function VideoFrame({ url }: iVideoProps) {
  return <StVideoFrame src={url}></StVideoFrame>;
}

const StVideoFrame = styled.iframe`
  width: 180rem;
  height: 100rem;
  margin-top: 6rem;
  margin-bottom: 34rem;

  background: black;
  border-radius: 5rem;
`;
