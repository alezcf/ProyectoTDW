
import { React, useEffect, useState } from "react";
import { fetchRandomDog } from "../../../queries/query";

export default function Dog() {
    const [dogData, setDogData] = useState({ name: '', image: '' });

    useEffect(() => {
        fetchRandomDog()
        .then((imageURL) => {
          const dogName = generateDogName(); // Generar un nombre para el perro
          setDogData({ name: dogName, image: imageURL }); // Guardar el nombre y la URL de la imagen en el estado
        })
        .catch((error) => {
            console.error('Error al obtener la foto del perro:', error);
          // Manejo del error, por ejemplo, mostrar un mensaje al usuario
        });
    }, []);

    const generateDogName = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let dogName = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            dogName += characters.charAt(randomIndex);
        }
        return dogName;
    };

    return (
        <div>
            <h2>{dogData.name}</h2>
            <img src={dogData.image} alt="Perro" />
        </div>
    );
}
