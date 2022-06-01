import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <p>
      Built with ❤️ by&nbsp;
      <a href="https://github.com/relaxxpls">
        <b>Laxman Desai</b>
      </a>
    </p>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  height: fit-content;
  width: 100%;
  text-align: center;
  background-color: #1f56bb;
  color: #ffffff;

  a {
    color: #ffffff;
  }
`;
