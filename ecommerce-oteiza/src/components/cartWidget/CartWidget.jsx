import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon color="white" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
