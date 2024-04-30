import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyCars } from './data';

const CarPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(
    dummyCars.find((car) => car.id === Number(id)) || null
  );
  const navigate = useNavigate();
  if (!car) {
    return <h1>Car not found</h1>;
  } else {
    return (
      <div
        style={{
          background: '#1a1a1a',
          color: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          width: '100%',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <img
          src={car.image}
          alt={car.name}
          style={{
            width: '70%',
            height: '70vh',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        />
        <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>{car.name}</h2>
        <p style={{ textAlign: 'center', margin: '0.5rem 0' }}>
          Price: ${car.price}
        </p>
        <button
          onClick={() => navigate('/')}
          style={{ marginTop: '1rem', padding: '1.2rem' }}
        >
          Close
        </button>
      </div>
    );
  }
};

export default CarPage;
