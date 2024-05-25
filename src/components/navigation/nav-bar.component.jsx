import { Link, Outlet } from "react-router-dom";
import "./nav-bar.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo-container" to="/home">
        <Logo className="logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/shop">
          Contact
        </Link>
        <Link className="nav-link" to="/shop">
          Sign In
        </Link>
      </div>

      {/* <Outlet /> */}
    </div>
  );
};
export default NavBar;
