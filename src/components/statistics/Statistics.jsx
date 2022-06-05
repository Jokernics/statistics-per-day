import React from 'react';
import './index.scss';

const Statistics = ({ name, amount, total }) => {

  return (
    <div>
      <h3>
        {name}
        <span> {amount}</span>
        <span> /</span> 
        <span>{total}</span>
      </h3>


    </div>
  );
};

export default Statistics;