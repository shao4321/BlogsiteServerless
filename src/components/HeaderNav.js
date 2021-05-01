import { CSSTransition } from "react-transition-group";
import Navbar from "./Navbar";

const HeaderNav = () => {
  return (
    <CSSTransition
      in={true}
      timeout={350}
      classNames="nav-bar"
      unmountOnExit
      appear
    >
      <Navbar />
    </CSSTransition>
  );
};

export default HeaderNav;