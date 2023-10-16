import React, { useState } from "react";
import Dog from "/src/pages/components/Dog.jsx";
import { Grid, Button } from "@mui/material";

const Home = () => {
  const [acceptedDogs, setAcceptedDogs] = useState([]);
  const [rejectedDogs, setRejectedDogs] = useState([]);

  const handleAccept = (dog) => {
    setAcceptedDogs((prevAcceptedDogs) => [...prevAcceptedDogs, {...dog, showDescription: false}]);
  };

  const handleReject = (dog) => {
    setRejectedDogs((prevRejectedDogs) => [...prevRejectedDogs, {...dog, showDescription: false}]);
  };

  const handleToggleDescription = (dog, setDogs) => {
    setDogs((prevDogs) => prevDogs.map((d) => d === dog ? {...d, showDescription: !d.showDescription} : d));
  };

  const handleRepent = (dog, setFromDogs, setToDogs) => {
    setFromDogs((prevFromDogs) => prevFromDogs.filter((d) => d !== dog));
    setToDogs((prevToDogs) => [...prevToDogs, dog]);
  };

  const handleRemove = (dog, setFromDogs) => {
    setFromDogs((prevFromDogs) => prevFromDogs.filter((d) => d !== dog));
  };

  return (
    <Grid container spacing={10} style={{ width: "100vw" }}>
      <Grid item xs={4}>
        <h2>Perro Candidato</h2>
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
          <Dog onAccept={handleAccept} onReject={handleReject} />
        </div>
      </Grid>
      <Grid item xs={4}>
        <h2>Perros Aceptados</h2>
        <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
          {acceptedDogs.map((dog, index) => (
            <div key={index}>
              <img src={dog.image} alt="Perro" style={{ maxWidth: "100%" }} />
              <p>{dog.name}</p>
              {dog.showDescription && <p>{dog.description}</p>}
              <Button 
                variant="contained" 
                onClick={() => handleToggleDescription(dog, setAcceptedDogs)}
              >
                {dog.showDescription ? "Ocultar Descripción" : "Mostrar Descripción"}
              </Button><br/>
              <Button 
                variant="contained" 
                onClick={() => handleRepent(dog, setAcceptedDogs, setRejectedDogs)}
              >
                Arrepentirse
              </Button><br/>
              <Button 
                variant="contained" 
                onClick={() => handleRemove(dog, setAcceptedDogs)}
              >
                Eliminar
              </Button>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={4}>
        <h2>Perros Rechazados</h2>
        <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
          {rejectedDogs.map((dog, index) => (
            <div key={index}>
              <img src={dog.image} alt="Perro" style={{ maxWidth: "100%" }} />
              <p>{dog.name}</p>
              {dog.showDescription && <p>{dog.description}</p>}
              <Button 
                variant="contained" 
                onClick={() => handleToggleDescription(dog, setRejectedDogs)}
              >
                {dog.showDescription ? "Ocultar Descripción" : "Mostrar Descripción"}
              </Button><br/>
              <Button 
                variant="contained" 
                onClick={() => handleRepent(dog, setRejectedDogs, setAcceptedDogs)}
              >
                Arrepentirse
              </Button><br/>
              <Button 
                variant="contained" 
                onClick={() => handleRemove(dog, setRejectedDogs)}
              >
                Eliminar
              </Button>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
