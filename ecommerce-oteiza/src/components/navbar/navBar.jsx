import CartWidget from "../cartWidget/CartWidget";
import "./navBarStyles.css";
import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";
import { IconContext } from "react-icons";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link to="/">
            <IconContext.Provider
              value={{ color: "black", size: "8rem", className: "icon-navbar" }}
            >
              <div>
                <GiMuscleUp />
              </div>
            </IconContext.Provider>
          </Link>

          <ul className="navbarList">
            <li className="links">
              <Link to="/category/proteinas">
                <a href="">Proteinas</a>
              </Link>
            </li>
            <li className="links">
              <Link to="/category/creatinas">
                <a href="">Creatinas</a>
              </Link>
            </li>
            <li className="links">
              <Link to="/category/pre-entrenos">
                <a href="">Pre-entrenos</a>
              </Link>
            </li>
            <li className="links">
              <Link to="/">
                <a href="">Todos</a>
              </Link>
            </li>
          </ul>

          <CartWidget />
        </div>
      </>
    </div>
  );
};
