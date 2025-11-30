import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Camara() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
      }
    }

    startCamera();
  }, []);

  function handleFinish() {
    navigate("/"); // 👈 ESTO TE REGRESA AL INICIO
  }

  return (
    <div className="camera-container">
      <h2 className="title">Confirmación de identidad</h2>

      <div className="camera-frame">
        <video ref={videoRef} autoPlay playsInline className="camera-video" />
      </div>

      <button className="button" onClick={handleFinish}>
        Finalizar
      </button>
    </div>
  );
}
