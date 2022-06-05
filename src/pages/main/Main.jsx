import React from 'react';
import { useSelector } from 'react-redux';
import CountersList from '../../components/counters/CountersList';

const Main = () => {
  const clientsAmount = useSelector(state => state.counter.activites.length)

  return (
    <div>
      <h1>Клиент № {clientsAmount}</h1>
      <CountersList/>
    </div>
  );
};

export default Main;