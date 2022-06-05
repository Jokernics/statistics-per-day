import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementOffer, decrementTotal, incrementOffer, incrementTotal } from '../../features/counter/counterSlice';
import './index.scss';

const Counter = ({name, current}) => {
  const dispatch = useDispatch()
  const [checkbox, setCheckbox] = useState({ exist: false, sold: false });

  function handleOfferExisting(e) {
    const checked = e.target.checked

    if (checked) {
      setCheckbox({ ...checkbox, exist: checked })
      dispatch(incrementTotal(name))
    } else {
      setCheckbox({ ...checkbox, exist: false, sold: false })
      dispatch(decrementTotal(name))
    }
  }

  function handleOfferSold(e) {
    const checked = e.target.checked
    if (checked) {
      setCheckbox({ ...checkbox, exist: true, sold: checked })
      dispatch(incrementOffer(name))
    } else {
      setCheckbox({ ...checkbox, sold: false })
      dispatch(decrementOffer(name))
    }
  }

  useEffect(() => {
    setCheckbox({ exist: false, sold: false })
  }, [current]);

  return (
    <div className='counter'>
      <div className="counter__container">
        <h3 >{name}</h3>
        <div>
          <h3>Был?</h3>
          <input
            checked={checkbox.exist}
            onChange={handleOfferExisting}
            type="checkbox"
          />
        </div>
        <div>
          <h3>Выдал?</h3>
          <input
            checked={checkbox.sold}
            onChange={handleOfferSold}
            type="checkbox"
          />
        </div>

      </div>
    </div>
  );
};

export default Counter;