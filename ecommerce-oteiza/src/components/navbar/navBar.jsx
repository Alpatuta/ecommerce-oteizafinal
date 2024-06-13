import "./navBarStyles.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img
        src="https://res.cloudinary.com/dfa3ts2kx/image/upload/v1718299051/98d7eff26bbdf391ae56288894e9d806_e4q9wt.jpg"
        alt=""
      />

      <ul className="navbarList">
        <li>
          <a href="">Proteinas</a>
        </li>
        <li>
          <a href="">Creatinas</a>
        </li>
        <li>
          <a href="">Pre-entrenos</a>
        </li>
        <li>
          <a href="">Todos</a>
        </li>
      </ul>

      <MdOutlineAddShoppingCart size={30} />
    </div>
  );
};
