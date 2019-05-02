import OpenSlideBar from "./OpenSlideBar";
import Backdrop from "./Backdrop";
import DrawerToogleButton from "../Toolbar/DrawerToggleButton";

class Toggle extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <OpenSlideBar />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <DrawerToogleButton
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        {sideDrawer}
        {backdrop}
      </div>
    );
  }
}

export default Toggle;
