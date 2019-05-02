import styled from "styled-components";
import Link from "next/link";

const OpenSlideBar = props => (
  <SideDrawer>
    <Ul>
      <li>
        <Link href="/blog">
          <A>BLOG</A>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <A>PORTFOLIO</A>
        </Link>
      </li>

      <li>
        <Link href="/wanderlust">
          <A>WANDERLUST: travel lover</A>
        </Link>
      </li>
      <li>
        <Link href="/video">
          <A>VIDEO</A>
        </Link>
      </li>
      <li>
        <Link href="/clients">
          <A>FOR CLIENTS</A>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <A>CONTACTS</A>
        </Link>
      </li>
    </Ul>
  </SideDrawer>
);

export default OpenSlideBar;

const SideDrawer = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 400px;
  z-index: 200;
`;

const Ul = styled.ul`
  width: 70%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const A = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  line-height: 50px;
  cursor: pointer;
  &:hover {
    color: #a6a6ad;
  }
`;
