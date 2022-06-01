import styled from "styled-components";

const Header = () => (
  <HeaderContainer>
    <h1>My Image Gallery</h1>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.header`
  background-color: #1f56bb;
  color: #ffffff;
  padding: 0.25rem 0;
  text-align: center;
  margin: 0;
`;
