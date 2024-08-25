import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomID, setRoomID] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomID.trim()) {
      navigate(`/room/${roomID}`);
    } else {
      alert("Por favor, ingresa un ID de sala válido.");
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Ingresa tu ID de Sala"
        type="text"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleJoin}>Ingresar</button>
    </div>
  );
}

export default Home;
