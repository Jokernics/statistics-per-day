import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toNextClient } from '../../features/counter/counterSlice';
import StatisticsList from '../statistics/StatisticsList';
import Counter from './Counter';

const CountersList = () => {
  const activites = useSelector(state => state.counter.activites)
  const current = useSelector(state => state.counter.current)
  const [showStatictics, setShowStatictics] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className='counters__container'>
      {
        Object.keys(activites[current]).map((name, index) => 
          <Counter 
            key={index + 1}
            name={name}
            current={current}
          />
        )
      }
      <button
        className='counter__btn'
        onClick={() => dispatch(toNextClient())}
      >
        Пойти дальше
      </button>    
      <button 
        className='counter__btn'
        onClick={(() => {
          setShowStatictics(!showStatictics)
        })}
      >
        Показать статистику
      </button>
      {
        showStatictics && <StatisticsList />
      }
    </div>
  );
};

export default CountersList;