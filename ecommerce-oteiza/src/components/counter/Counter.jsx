import { Button } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button
        disableRipple
        variant="contained"
        onClick={restar}
        sx={{
          textTransform: "none",
          bgcolor: "#dc143c",
          borderRadius: "6px",
          "&:hover": { bgcolor: "#b11230 " },
        }}
      >
        -
      </Button>
      <h2 style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}>
        {" "}
        {contador}{" "}
      </h2>
      <Button
        disableRipple
        variant="contained"
        onClick={sumar}
        sx={{
          textTransform: "none",
          bgcolor: "#dc143c",
          borderRadius: "6px",
          "&:hover": { bgcolor: "#e02649" },
        }}
      >
        +
      </Button>

      <Button
        variant="contained"
        disableRipple
        sx={{
          textTransform: "none",
          fontFamily: "Poppins",
          fontSize: "1rem",
          bgcolor: "#fff",
          color: "#000",
          borderRadius: "6px",
          borderColor: "#fff",
          borderWidth: "2px",
          borderStyle: "solid",
          "&:hover": { bgcolor: "#fff", borderColor: "#dc143c" },
          marginLeft: "9rem",
        }}
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
