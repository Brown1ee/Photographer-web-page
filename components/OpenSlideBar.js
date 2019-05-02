import styled from "styled-components";
import Link from "next/link";

class OpenSlideBar extends React.Component {
  state = {
    showMenu: false
  };

  showMenu = e => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <Ul>
          <li>
            <Link href="/blog">
              <A>BLOG</A>
            </Link>
          </li>
          <li>
            <Dropdown>
              <A onClick={this.showMenu}>PORTFOLIO</A>
              {this.state.showMenu && (
                <DropdownContent>
                  <DropdownLi margy heigh>
                    <Link href="/wedding">
                      <A>Wedding</A>
                    </Link>
                  </DropdownLi>
                  <DropdownLi>
                    <Link href="/light">
                      <A>Natural light</A>
                    </Link>
                  </DropdownLi>
                </DropdownContent>
              )}
            </Dropdown>
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
        <style jsx>
          {`
            .side-drawer {
              height: 100%;
              background: white;
              box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
              position: fixed;
              top: 0;
              left: 0;
              width: 80%;
              max-width: 400px;
              z-index: 200;
              transform: translateX(-100%);
              transition: transform 0.3s ease-out;
            }
            .side-drawer.open {
              transform: translateX(0);
            }
          `}
        </style>
      </nav>
    );
  }
}

export default OpenSlideBar;

const Dropdown = styled.div``;

const DropdownLi = styled.div`
  display: flex;
  height: ${props => (props.heigh ? "50px" : "45px")};
  justify-content: center;
  align-items: center;
  margin-top: ${props => (props.margy ? "20px" : "0px")};
`;

const DropdownContent = styled.div`
  display: flex;
  display: block;
  flex-wrap: wrap;
  flex: auto;
  background-color: white;
  width: 90px;
  z-index: 1;
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
