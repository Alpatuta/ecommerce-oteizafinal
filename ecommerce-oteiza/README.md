# Ecommerce-oteiza

Bienvenido al repositorio del Ecommerce-oteiza. Este proyecto es una aplicación web para la venta de suplementos.

## Tecnologías Utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## Librerías y Herramientas

- ![SweetAlert](https://img.shields.io/badge/SweetAlert-FF6457?style=for-the-badge&logo=SweetAlert&logoColor=white)
- ![Sonner](https://img.shields.io/badge/Sonner-FFBF00?style=for-the-badge&logo=Sonner&logoColor=white)
- ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio**:

   ```sh
   git clon https://github.com/Alpatuta/ecommerce-oteizafinal

   ```

2. **Instala las dependencias**:

   ```sh
   npm install
   ```

3. **Configura Firebase**:

   - Crea un proyecto en Firebase.
   - Configura la autenticación y la base de datos Firestore.
   - Copia las configuraciones de Firebase en un archivo `.env` en la raíz del proyecto.

   ```env
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Inicia la aplicación**:
   ```sh
   npm start
   ```

## Uso de Librerías

### SweetAlert

SweetAlert se utiliza para mostrar alertas y diálogos modales. Aquí hay un ejemplo de cómo usarlo:

```javascript
import Swal from "sweetalert2";

Swal.fire({
  title: "¡Producto añadido al carrito!",
  text: "Continúa comprando o ve al carrito para finalizar la compra.",
  icon: "success",
  confirmButtonText: "Ok",
});
```
