import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Camara() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="camera-container">
      <h2 className="title">Validación facial</h2>
      <p>Coloca tu rostro dentro del cuadro</p>

      <div className="camera-frame">
        <video ref={videoRef} autoPlay className="camera-video"></video>
      </div>

      <button className="button" onClick={() => alert("Identidad confirmada")}>
        Confirmar identidad
      </button>

      <button className="button" onClick={() => navigate("/rfid")}>
        Regresar
      </button>
    </div>
  );
}
