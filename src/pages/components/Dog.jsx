
import { React, useEffect, useState } from "react";
import { fetchRandomDog } from "../../../queries/query";

export default function Dog() {

    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        fetchRandomDog()
        .then((imageURL) => {
            setDogImage(imageURL);
        })
        .catch((error) => {
            console.error('Error al obtener la foto del perro:', error);
          // Manejo del error, por ejemplo, mostrar un mensaje al usuario
        });
    }, []);

    return <img src={dogImage} alt="Perro" />;
}
