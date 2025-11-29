import { useState } from "react";

export default function BuscarVuelo() {
  const [flight, setFlight] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Buscar tu vuelo ✈️</h1>

      <input
        type="text"
        placeholder="Número de vuelo"
        value={flight}
        onChange={(e) => setFlight(e.target.value)}
      />

      <button>Buscar vuelo</button>
    </div>
  );
}
