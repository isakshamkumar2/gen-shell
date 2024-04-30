import React from 'react';
import { dummyCars } from './data';
import { useNavigate } from 'react-router-dom';

type LandingProps = {};
function Landing(props: LandingProps) {
  const navigate = useNavigate();
  return (
    <div
      className="App"
      style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '4rem',
        height: 'fit-content',
        width: '80vw',
        margin: 'auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Luxury Cars Showcase</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Explore the finest collection of luxury cars
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(18vw, 1fr))',
          gap: '1.8rem',
        }}
      >
        {dummyCars.map((car) => (
          <div
            onClick={() => navigate('/cars/' + car.id)}
            key={car.id}
            style={{
              border: '1px solid #fff',
              padding: '1rem',
              borderRadius: '5px',
              height: '400px',
              textAlign: 'center',
              transition: 'box-shadow 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                '0 0 40px rgba(255, 255, 255, 0.5)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <h3 style={{ margin: '0.5rem 0' }}>{car.name}</h3>
            <p style={{ margin: '0.5rem 0' }}>Price: ${car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
