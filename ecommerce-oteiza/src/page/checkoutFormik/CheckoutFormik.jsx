import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { nombre: "", email: "", confirmar: "", direccion: "" },
    onSubmit: (data) => {},
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Minimo 5 caracteres")
        .max(30, "Maximo 30 caracteres"),
      email: Yup.string()
        .email("El email NO cumple con los parametros obligatorios")
        .required("Este campo es obligatorio"),
      confirmar: Yup.string()
        .email("El email NO cumple con los parametros obligatorios")
        .required("Este campo es obligatorio")
        .oneOf(
          [Yup.ref("email")],
          "El email NO coincide con el ingresado anteriormente"
        ),
      direccion: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Minimo 5 caracteres")
        .max(30, "Maximo 30 caracteres"),
    }),
    validateOnChange: false,
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <TextField
        variant="filled"
        type="text"
        label="Nombre"
        sx={{ width: "25%" }}
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      <TextField
        variant="filled"
        type="text"
        label="Email"
        sx={{ width: "25%" }}
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="filled"
        type="text"
        label="Confirmar email"
        sx={{ width: "25%" }}
        name="confirmar"
        onChange={handleChange}
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />
      <TextField
        variant="filled"
        type="text"
        label="Direccion"
        sx={{ width: "25%" }}
        name="direccion"
        onChange={handleChange}
        error={errors.direccion ? true : false}
        helperText={errors.direccion}
      />
      <Button type="submit" variant="contained">
        Confirmar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
