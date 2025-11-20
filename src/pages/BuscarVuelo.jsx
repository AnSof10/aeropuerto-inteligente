import { useState } from "react";

function BuscarVuelo() {
  const [flightNumber, setFlightNumber] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Número de vuelo:", flightNumber);

    // ---------------------------------------------------------
    //   ESPACIO PARA LA CONEXIÓN A MARIADB
    //   Aquí luego harás algo así:
    //
    //   const response = await fetch("http://localhost:3000/vuelos/" + flightNumber);
    //   const data = await response.json();
    //   setResultado(data);
    //
    // ---------------------------------------------------------

    setResultado(`Buscaste el vuelo: ${flightNumber}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80 flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold text-center">Buscar vuelo</h1>

        <input
          type="text"
          placeholder="Ingresa número de vuelo"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          className="border p-2 rounded-lg focus:outline-blue-600"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </form>

      {/* RESULTADO */}
      {resultado && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow text-center w-80">
          {resultado}
        </div>
      )}
    </div>
  );
}

export default BuscarVuelo;
