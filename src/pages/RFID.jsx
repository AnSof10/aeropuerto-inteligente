// Importamos useNavigate desde react-router-dom
// Esto nos permite movernos entre pantallas (rutas) dentro de la aplicación.
import { useNavigate } from "react-router-dom";

// ✅ COMPONENTE PRINCIPAL DE LA PANTALLA RFID
// Esta pantalla simula la parte donde el usuario acerca su tarjeta RFID
// y luego se activará la cámara para validar su identidad.
export default function RFID() {
  // 🚦 navigate nos sirve para cambiar de pantalla
  // En este caso lo usaremos para regresar a la pantalla anterior.
  const navigate = useNavigate();

  return (
    // 📦 Contenedor principal de toda la pantalla RFID
    <div style={{ padding: "20px", textAlign: "center", color: "black" }}>
      {/* 🧾 TÍTULO PRINCIPAL DE LA PANTALLA */}
      <h1>Acerca tu RFID 📡</h1>

      {/* 📖 TEXTO EXPLICATIVO PARA EL USUARIO */}
      <p>
        En esta pantalla se leerá tu tarjeta RFID y después se activará la
        cámara para validar tu identidad.
      </p>

      {/* 🛂 MENSAJE QUE SIMULA EL ESTADO DE LA CÁMARA */}
      <div style={{ marginTop: "30px" }}>🛂 Cámara pendiente de activar...</div>

      <br />
      <br />

      {/* 
        ✅ BOTÓN PARA VOLVER ATRÁS
        - navigate(-1) significa:
          "Regresa a la pantalla anterior"
        - En este proyecto regresa a la pantalla de "Buscar Vuelo"
      */}
      <button onClick={() => navigate(-1)}>⬅️ Volver</button>
    </div>
  );
}
