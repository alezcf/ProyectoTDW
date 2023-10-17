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
  <Grid container spacing={"20px"} style={{ maxWidth: "100%" }}>
    <Grid item xs={4}>
      <div>
        <center>
          <h2>Perro Candidato</h2>
        </center>
      </div>
      <div style={{ width:"100%", heigth: "100%", overflow: "hidden" }}>
        <center>
          <Dog onAccept={handleAccept} onReject={handleReject} />
        </center>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div>
        <center>
        <h2>Aceptados</h2>
        </center>
      </div>
      <div 
        style={{width:"100%",  height: "1200px", overflowY: "scroll" }}>
        {acceptedDogs.map((dog, index) => (
        <div key={index}>
          <center>
            <img 
              src={dog.image} alt="Perro" 
              style={{ 
                maxWidth: "100%",
                height: "500px"
              }}
            />
            </center>
          <div>
            <center>
            <p>{dog.name}</p>
            {dog.showDescription && <p>{dog.description}</p>}
            </center>
          </div> 
          
          <div>
            <center>
            <div>
              <Button
                  variant="contained"
                  onClick={() => handleToggleDescription(dog, setAcceptedDogs)}
                  style={{ backgroundColor: "green", color: "white" }}
                >
                {dog.showDescription ? "Ocultar Descripción" : "Mostrar Descripción"}
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => handleRepent(dog, setAcceptedDogs, setRejectedDogs)}
                style={{ backgroundColor: "red", color: "white" }}
                >
                Arrepentirse
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => handleRemove(dog, setAcceptedDogs)}
                style={{ backgroundColor: "red", color: "white" }}
                >
                Borrar
              </Button>
            </div>
            </center>
          </div>
        </div>
      ))}
    </div>
  </Grid>
  <Grid item xs={4}>
    <div>
      <center>
          <h2>Rechazados</h2>
      </center>
    </div>
    <div>
      <center>
        <div 
          style={{width:"100%", height: "1200px", overflowY: "scroll" }}>
          {rejectedDogs.map((dog, index) => 
          (
            <div key={index}>
                <img src={dog.image} alt="Perro" style={{ maxWidth: "100%" }} />
                <p>{dog.name}</p>
                {dog.showDescription && <p>{dog.description}</p>}
              <div>
                <Button
                  variant="contained"
                  onClick={() => handleToggleDescription(dog, setRejectedDogs)}
                  style={{ backgroundColor: "green", color: "white" }}
                  >
                  {dog.showDescription ? "Ocultar Descripción" : "Mostrar Descripción"}
                </Button>
              </div>

              <div>
                <Button
                  variant="contained"
                  onClick={() => handleRepent(dog, setRejectedDogs, setAcceptedDogs)}
                  style={{ backgroundColor: "green", color: "white" }}
                  >
                  Arrepentirse
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  onClick={() => handleRemove(dog, setRejectedDogs)}
                  style={{ backgroundColor: "red", color: "white" }}
                  >
                  Borrar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  </Grid>

</Grid>//final del grid principal
  );// el return
};

export default Home;
