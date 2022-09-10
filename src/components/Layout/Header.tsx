import { ButtonContainer } from "../../styles/ButtonStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0;
  padding: 0 30px;
`;
const Header = (props: any) => {
  return (
    <HeaderCss>
      <Link to="/">
        <h1>Blog</h1>
      </Link>

      <ButtonContainer onClick={props.onClick}>+</ButtonContainer>
    </HeaderCss>
  );
};

export default Header;
