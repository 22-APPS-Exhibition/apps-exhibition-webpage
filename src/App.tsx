import styled from "styled-components";
import Router from "./Router";
import { AirplaneImg } from "./assets/assets";

const Airplane = styled.aside`
  position: fixed;
  bottom: 10rem;
  right: 10rem;
  z-index: 20;
  cursor: pointer;
  > img {
    width: 32rem;
    height: 20rem;
    transform: rotate(13.6deg);
  }

  :hover {
    transform: rotate(-12.6deg);
  }
`;
function App() {
  return (
    <>
      <Router />
      <Airplane>
        <img src={AirplaneImg} alt="비행기 이미지" />
      </Airplane>
    </>
  );
}

export default App;
