import { useNavigate } from "react-router-dom";

export default function RFIDAgregar() {
  const navigate = useNavigate();

  function handleScan() {
    // Aquí en el futuro se conectará con el lector RFID real
    alert("RFID escaneado correctamente.");
    navigate("/camara-agregar");
  }

  return (
    <div className="container">
      <img src="/GAP_logo.jpg" alt="Logo aeropuerto" className="logo" />

      <h2 className="title">Registro de RFID</h2>
      <p style={{ marginBottom: "24px", color: "#555", fontSize: "14px" }}>
        Acerca la tarjeta al lector para registrar al usuario.
      </p>

      <button className="button" onClick={handleScan}>
        Escanear tarjeta RFID
      </button>
    </div>
  );
}
