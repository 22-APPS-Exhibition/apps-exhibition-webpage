import React from "react";
import styled from "styled-components";

export default function VideoFrame() {
  return (
    <StVideoFrame>
      {/* 쿠키 이슈
  <VideoFrame
    src="https://www.youtube.com/embed/sqwiXUv0XkM?autoplay=1&mute=1&loop=1"
    title="YouTube video player"
  /> */}
      Video
    </StVideoFrame>
  );
}

const StVideoFrame = styled.iframe`
  width: 100%;
  height: auto;
  margin-top: 6rem;
  margin-bottom: 34rem;

  background: black;
  border-radius: 5rem;
`;
