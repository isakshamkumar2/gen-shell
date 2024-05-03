import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const TopNavbar = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (window.location.pathname.includes('/cars')) {
      window.location.href = '/subapp-2';
    } else {
      navigate('/subapp-2');
    }
  };
  return (
    <div
      style={{
        height: '70px',
        backgroundColor: 'greenyellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <button onClick={() => navigate('/')} style={{ padding: '1rem' }}>
          Shell
        </button>
      </div>

      <div>
        <button onClick={handleNavigate} style={{ padding: '1rem' }}>
          Navigate to ChildSubAPP
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
