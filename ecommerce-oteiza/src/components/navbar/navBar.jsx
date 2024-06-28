import CartWidget from "../cartWidget/CartWidget";
import "./navBarStyles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dfa3ts2kx/image/upload/v1718299051/98d7eff26bbdf391ae56288894e9d806_e4q9wt.jpg"
              alt=""
              className="img-navbar"
            />
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
