import { useNavigate } from "react-router-dom";
import "../App.css";

export default function RFID() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">Escanea tu RFID</h2>
      <p>Acerca tu pase al lector</p>

      <button className="button" onClick={() => navigate("/")}>
        Finalizar
      </button>
    </div>
  );
}
