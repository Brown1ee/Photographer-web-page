import Link from "next/link";
import styled from "styled-components";

const Navbar = props => (
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
    <Nav>
      <li>
        <Link href="/blog">
          <NavLi>BLOG</NavLi>
        </Link>
      </li>
      <li>
        <Dropdown>
          <NavLi>PORTFOLIO</NavLi>
          <DropdownContent>
            <DropdownLi margy heigh>
              <Link href="/weddings">
                <NavLi marg>WEDDINGS</NavLi>
              </Link>
            </DropdownLi>
            <DropdownLi>
              <Link href="/light">
                <NavLi marg>NATURAL LIGHT</NavLi>
              </Link>
            </DropdownLi>
          </DropdownContent>
        </Dropdown>
      </li>
      <li>
        <Link href="/wanderlust">
          <NavLi>WANDERLUST: travel lover</NavLi>
        </Link>
      </li>
      <li>
        <Dropdown>
          <NavLi>VIDEO</NavLi>
          <DropdownContent>
            <DropdownLi margy heigh>
              <Link href="/photoshoots">
                <NavLi marg>PHOTOSHOOTS: making of</NavLi>
              </Link>
            </DropdownLi>
            <DropdownLi>
              <Link href="/travel">
                <NavLi marg>TRAVEL VIDEO</NavLi>
              </Link>
            </DropdownLi>
          </DropdownContent>
        </Dropdown>
      </li>
      <li>
        <Link href="/clients">
          <NavLi>FOR CLIENTS</NavLi>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <NavLi>CONTACTS</NavLi>
        </Link>
      </li>
    </Nav>
  </Div>
);
export default Navbar;

const Dropdown = styled.div``;

const DropdownLi = styled.div`
  display: flex;
  height: ${props => (props.heigh ? "50px" : "45px")};
  justify-content: flex-start;
  align-items: center;
  margin-top: ${props => (props.margy ? "10px" : "0px")};
`;

const DropdownContent = styled.ul`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: auto;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: 100px;
  margin-left: 30px;
  transform: translateY(-3px);
  z-index: -1;
  transition: all 0.3s ease-in-out;
  ${Dropdown}:hover & {
    display: block;
    visibility: visible;
    opacity: 0.9;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.5s;
  }
`;

const Div = styled.div`
  @media (max-width: 900px) {
    width: 350px;
    border: 1px solid red;
    display: none;
  }
`;

const NavOne = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  font-size: 40px;
  flex-wrap: wrap;
  flex: auto;
  padding-inline-start: 10px;
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 350px;
    display: none;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 5px;
  font-size: 10px;
  margin-right: 0.5rem;
  flex: auto;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: none;
  }
`;

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
`;
