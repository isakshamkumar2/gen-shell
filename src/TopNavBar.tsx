import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const TopNavbar = (props: Props) => {
  const navigate = useNavigate();
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
        <button
          onClick={() => navigate('/subapp-2')}
          style={{ padding: '1rem' }}
        >
          Navigate to ChildSubAPP
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
