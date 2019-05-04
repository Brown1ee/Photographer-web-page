import styled from "styled-components";
import Link from "next/link";

class OpenSlideBar extends React.Component {
  state = {
    visiblePortfolioDropDown: false,
    visibleVideoDropDown: false
  };

  togglePortfolio = e => {
    this.setState(prevState => ({
      visiblePortfolioDropDown: !prevState.visiblePortfolioDropDown,
      visibleVideoDropDown: false
    }));
  };

  toggleVideo = e => {
    this.setState(prevState => ({
      visibleVideoDropDown: !prevState.visibleVideoDropDown,
      visiblePortfolioDropDown: false
    }));
  };

  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    const { visiblePortfolioDropDown, visibleVideoDropDown } = this.state;

    return (
      <nav className={drawerClasses}>
        <Ul>
          <li>
            <Link href="/blog">
              <A>BLOG</A>
            </Link>
          </li>
          <li>
            <div className="drop-down">
              <A onClick={this.togglePortfolio}>PORTFOLIO</A>
              {visiblePortfolioDropDown && (
                <div className="drop-down-content">
                  <div margy heigh className="dropdown-div animated fadeInDown">
                    <Link href="/weddings">
                      <A>WEDDINGS</A>
                    </Link>
                  </div>
                  <div className="dropdown-div animated fadeInDown">
                    <Link href="/light">
                      <A>NATURAL LIGHT</A>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </li>

          <li>
            <Link href="/wanderlust">
              <A>WANDERLUST: travel lover</A>
            </Link>
          </li>
          <li>
            <div className="drop-down">
              <A onClick={this.toggleVideo}>VIDEO</A>
              {visibleVideoDropDown && (
                <div className="drop-down-content">
                  <div margy heigh className="dropdown-div animated fadeInDown">
                    <Link href="/photoshoots">
                      <A>PHOTOSHOOTS: making of</A>
                    </Link>
                  </div>
                  <div className="dropdown-div animated fadeInDown">
                    <Link href="/travel">
                      <A>TRAVEL VIDEO</A>
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            .dropdown-div {
              display: flex;
              height: ${props => (props.heigh ? "50px" : "45px")};
              justify-content: center;
              align-items: center;
              margin-top: ${props => (props.margy ? "20px" : "0px")};
            }
            .drop-down-content {
              display: flex;
              display: block;
              flex-wrap: wrap;
              flex: auto;
              background-color: white;
              width: 120px;
              z-index: 1;
              font-size: 10px;
            }
            .drop-down {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .side-drawer {
              height: 100%;
              background: white;
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

const DropdownContent = styled.div`
  display: flex;
  display: block;
  flex-wrap: wrap;
  flex: auto;
  background-color: white;
  width: 120px;
  z-index: 1;
  font-size: 10px;
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
`;
