// En el componente Home
import React, { useState } from "react";
import Dog from "/src/pages/components/Dog.jsx";
import { Grid, Button } from "@mui/material";

const Home = () => {
  const [acceptedDogs, setAcceptedDogs] = useState([]);
  const [rejectedDogs, setRejectedDogs] = useState([]);

  const handleAccept = (dog) => {
    setAcceptedDogs((prevAcceptedDogs) => [...prevAcceptedDogs, dog]);
    
  };

  const handleReject = (dog) => {
    setRejectedDogs((prevRejectedDogs) => [...prevRejectedDogs, dog]);
  };

  return (
    <Grid container spacing={10} style={{ width: "100vw" }}>
      <Grid item xs={4}>
        {/* Contenido del perro candidato */}
        <h2>Perro Candidato</h2>
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
          <Dog onAccept={handleAccept} onReject={handleReject} />
        </div>
      </Grid>
      <Grid item xs={4}>
        {/* Contenido de perros aceptados */}
        <h2>Perros Aceptados</h2>
        {acceptedDogs.map((dog, index) => (
          <div key={index}>
            <img src={dog.image} alt="Perro" style={{ maxWidth: "100%" }} />
            <p>{dog.name}</p>
          </div>
        ))}
      </Grid>
      <Grid item xs={4}>
        {/* Contenido de perros rechazados */}
        <h2>Perros Rechazados</h2>
        {rejectedDogs.map((dog, index) => (
          <div key={index}>
            <img src={dog.image} alt="Perro" style={{ maxWidth: "100%" }} />
            <p>{dog.name}</p>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
