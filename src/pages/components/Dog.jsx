import React from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import { fetchRandomDog } from '../../../queries/query';
import { loremIpsum } from 'lorem-ipsum';

export default function Dog({ onAccept, onReject }) {
  const generateDogName = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let dogName = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      dogName += characters.charAt(randomIndex);
    }
    return dogName;
  };

  const generateDogDescription = () => {
    return loremIpsum({
      count: 1, // Número de párrafos que deseas generar
      format: 'plain', // Formato del texto generado (puede ser 'plain' o 'html')
      random: Math.random, // Función para generar números aleatorios
    });
  };

  const { data: imageURL, isFetching, refetch } = useQuery('fetchDog', fetchRandomDog, {
    onSuccess: () => {
      setDogData({ name: generateDogName(), image: imageURL, description: generateDogDescription() });
    },
  });

  const [dogData, setDogData] = React.useState({ name: '', image: '', description: '' });

  const handleAccept = () => {
    onAccept({ name: dogData.name, image: dogData.image, description: dogData.description });
    refetch();
  };

  const handleReject = () => {
    onReject({ name: dogData.name, image: dogData.image, description: dogData.description });
    refetch();
  };

  return (
<div className="tinder-card">
  {isFetching ? (
    <div className="loading-spinner">
      <CircularProgress />
    </div>
  ) : (
    <div>
      <div>
      <img style={{width:"400px", heigth: "800px" }} className="dog-image" src={dogData.image} alt="Perro" />
      </div>
    
      <div className="dog-info">
        <h2 className="dog-name">{dogData.name}</h2>
        <p className="dog-description">{dogData.description}</p>
      </div>
      <div className="action-buttons">
        <button 
          className="accept-button" 
          onClick={handleAccept} 
          disabled={isFetching}
          style={{ backgroundColor: "green", color: "white" }}
          >
          Aceptar
        </button>
        <button 
        className="reject-button" 
        onClick={handleReject} 
        disabled={isFetching}
        style={{ backgroundColor: "red", color: "white" }}
        >
          Rechazar
        </button>
      </div>
    </div>
  )}
</div>
  );
}
