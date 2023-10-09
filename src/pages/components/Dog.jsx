import React, { useEffect, useState } from "react";
import { fetchRandomDog } from "../../../queries/query";

export default function Dog({ onAccept, onReject }) {
  const [dogData, setDogData] = useState({ name: "", image: "" });

  useEffect(() => {
    fetchRandomDog()
      .then((imageURL) => {
        const dogName = generateDogName();
        setDogData({ name: dogName, image: imageURL });
      })
      .catch((error) => {
        console.error("Error al obtener la foto del perro:", error);
      });
  }, []);

  const generateDogName = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let dogName = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      dogName += characters.charAt(randomIndex);
    }
    return dogName;
  };

  const handleAccept = () => {
    onAccept({ name: dogData.name, image: dogData.image });
    fetchRandomDog()
      .then((imageURL) => {
        const dogName = generateDogName();
        setDogData({ name: dogName, image: imageURL });
      })
      .catch((error) => {
        console.error("Error al obtener la foto del perro:", error);
      });
  };

  const handleReject = () => {
    onReject({ name: dogData.name, image: dogData.image });
    fetchRandomDog()
      .then((imageURL) => {
        const dogName = generateDogName();
        setDogData({ name: dogName, image: imageURL });
      })
      .catch((error) => {
        console.error("Error al obtener la foto del perro:", error);
      });
  };

  return (
    <div>
      <h2>Nombre: {dogData.name}</h2>
      <img src={dogData.image} alt="Perro" />
      <button onClick={handleAccept}>Aceptar</button>
      <button onClick={handleReject}>Rechazar</button>
    </div>
  );
}
