import { useNavigate } from "react-router-dom";

export default function UsuarioAgregado() {
  const navigate = useNavigate();

  function volverInicio() {
    navigate("/");
  }

  return (
    <div className="container">
      <img src="/GAP_logo.jpg" alt="logo" className="logo" />

      <h2 className="title">¡Usuario agregado!</h2>
      <p style={{ marginBottom: "24px", color: "#555", fontSize: "15px" }}>
        El pasajero ha sido registrado correctamente en el sistema.
      </p>

      <button className="button" onClick={volverInicio}>
        Volver al inicio
      </button>
    </div>
  );
}
