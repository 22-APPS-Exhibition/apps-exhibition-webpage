import styled from "styled-components";
import Router from "./Router";

function App() {
  return (
    <ContentWrapper>
      <Router />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
