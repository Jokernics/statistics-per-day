import React from 'react';
import { useSelector } from 'react-redux';
import { getTemplate } from '../../features/counter/counterSlice';
import Statistics from './Statistics';

const StatisticsList = () => {
  const activites = useSelector(state => state.counter.activites)
  const names = Object.keys(activites[0])
  const total = {}

  names.forEach(name => {
    total[name] = { amount: 0, total: 0 } 
  })

  for (let i = 0; i < activites.length; i++) {
    names.forEach(name => {
      total[name].amount += activites[i][name].amount
      total[name].total += activites[i][name].total
    })
  }

  return (
    <div>
      <h3>Всего клиентов {activites.length - 1}</h3>
      {Object.keys(total).map((name, index) => 
        <Statistics 
          key={index}
          name={name}
          amount={total[name].amount}
          total={total[name].total}
        />
      )}

    </div>
  );
};

export default StatisticsList;
