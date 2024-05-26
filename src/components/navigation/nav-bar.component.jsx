import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav-bar.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);

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
        {currentUser ? (
          <span onClick={signOutUser} className="nav-link">
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        )}
      </div>

      {/* <Outlet /> */}
    </div>
  );
};
export default NavBar;
