import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CamaraAgregar() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
        alert("No se pudo acceder a la cámara.");
      }
    }

    startCamera();

    // Apagar cámara al salir
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  function handleConfirmar() {
    // Aquí después podríamos mandar datos al backend
    navigate("/usuario-agregado");
  }

  return (
    <div className="camera-container">
      <img src="/GAP_logo.jpg" alt="logo" className="logo" />
      <h2 className="title">Confirmación de identidad</h2>

      <div className="camera-frame">
        <video ref={videoRef} autoPlay className="camera-video" />
      </div>

      <button className="button" onClick={handleConfirmar}>
        Confirmar identidad
      </button>
    </div>
  );
}
