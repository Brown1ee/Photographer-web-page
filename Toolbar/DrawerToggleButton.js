import styled from "styled-components";
import Link from "next/link";

const DrawerToogleButton = props => (
  <Div>
    <NavOne primary>
      <li>
        <Link href="/">
          <NavLi font marg>
            XENIA BROWN
          </NavLi>
        </Link>
      </li>
    </NavOne>
    <ToggleButton onClick={props.drawerClickHandler}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  </Div>
);

export default DrawerToogleButton;

const NavLi = styled.a`
  color: #4a4a4a;
  margin-left: ${props => (props.marg ? "0px" : "70px")};
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  cursor: pointer;
  &:hover {
    color: #a6a6ad;
  }
  font-family: ${props =>
    props.font ? "Quicksand, sans-serif" : "Didact Gothic, sans-serif"};
  letter-spacing: 0.2em;
  @media (min-width: 900px) {
    display: none;
  }
`;

const NavOne = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  font-size: 35px;
  flex-wrap: wrap;
  flex: auto;
  padding-inline-start: 10px;
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 350px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  padding: 0;
  box-sizing: border-box;
  @media (min-width: 900px) {
    display: none;
  }
`;

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 3px;
  background: #4a4a4a;
`;
