import React from 'react';
import LeaderCard from '../components/LeaderCard';

const Leaders = () => {
  const leaders = [
    { name: 'John Doe', role: 'President', image: 'https://via.placeholder.com/100' },
    { name: 'Jane Smith', role: 'Vice President', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div>
      <h1>Meet Our Leaders</h1>
      {leaders.map((leader, index) => (
        <LeaderCard key={index} {...leader} />
      ))}
    </div>
  );
};

export default Leaders;