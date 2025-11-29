// Importamos useState para manejar datos que cambian en tiempo real
import { useState } from "react";

// Importamos useNavigate para poder cambiar de pantalla (a RFID)
import { useNavigate } from "react-router-dom";

// ✅ FUNCIÓN PARA FORMATO DEL BACKEND
// Convierte el nombre a:
// - SIN acentos
// - TODO en MAYÚSCULAS
function normalizarParaBackend(texto) {
  return texto
    .normalize("NFD") // Separa las letras de los acentos
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .toUpperCase(); // Convierte todo a MAYÚSCULAS
}

// ✅ COMPONENTE DE LA PANTALLA "BUSCAR VUELO"
export default function BuscarVuelo() {
  // 🧠 Estado para el nombre (SE GUARDA NORMAL, SIN MODIFICAR)
  const [name, setName] = useState("");

  // 🧠 Estado para el número de vuelo
  const [flight, setFlight] = useState("");

  // 🚦 Control de navegación entre pantallas
  const navigate = useNavigate();

  // ✅ FUNCIÓN QUE SIMULA EL ENVÍO AL BACKEND
  function buscarEnBackend() {
    // Convertimos el nombre al formato correcto del backend
    const nombreParaEnviar = normalizarParaBackend(name);

    console.log("Nombre enviado al backend:", nombreParaEnviar);
    console.log("Número de vuelo enviado:", flight);

    // ✅ AQUÍ DESPUÉS IRÁ EL FETCH REAL A LA BASE DE DATOS
    alert(
      "Datos enviados al backend:\n\n" +
        "Nombre: " +
        nombreParaEnviar +
        "\n" +
        "Vuelo: " +
        flight
    );
  }

  return (
    // 📦 CONTENEDOR PRINCIPAL DE LA PANTALLA
    <div style={{ padding: "20px", textAlign: "center", color: "black" }}>
      {/* 🖼 LOGO DE GAP (debe estar en la carpeta /public) */}
      <img
        src="/GAP_logo.jpg"
        alt="Grupo Aeroportuario del Pacífico"
        width="350"
        style={{ marginBottom: "20px" }}
      />

      {/* 🧾 TÍTULO */}
      <h1>Buscar tu vuelo ✈️</h1>

      {/* ✅ INPUT PARA EL NOMBRE COMPLETO (NORMAL, CON TILDES) */}
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      {/* ✅ INPUT PARA EL NÚMERO DE VUELO */}
      <input
        type="text"
        placeholder="Número de vuelo"
        value={flight}
        onChange={(e) => setFlight(e.target.value)}
      />

      <br />
      <br />

      {/* 🔍 BOTÓN BUSCAR → SIMULA ENVÍO AL BACKEND */}
      <button onClick={buscarEnBackend}>Buscar vuelo</button>

      <br />
      <br />

      {/* ➡️ BOTÓN SIGUIENTE → CAMBIA A PANTALLA RFID */}
      <button onClick={() => navigate("/rfid")}>Siguiente</button>
    </div>
  );
}
