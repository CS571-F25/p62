import React from 'react';
import { Card } from 'react-bootstrap';

const LeaderCard = ({ name, role, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100px', borderRadius: '50%' }} />
      <h5>{name}</h5>
      <p>{role}</p>
    </div>
  );
};

export default LeaderCard;