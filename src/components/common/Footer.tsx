import styled from "styled-components";
const Footer = () => {
  return (
    <StFooter>
      <p>Copyright ⓒ APPS Since 2022 All Rights Reserved.</p>
      <p>Department APPS of SMWU</p>
    </StFooter>
  );
};

const StFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 42rem;
  margin-bottom: 23.2rem;

  > p {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 0.1em;

    :first-child {
      margin-bottom: 5.2rem;
    }
  }
`;

export default Footer;
