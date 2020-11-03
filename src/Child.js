import React, { useContext } from 'react';
import valueContext from './valueContext';

function Child() {
  let value = useContext(valueContext); 
  return (
    <div>
      Child Numer is {value}
    </div>
  );
}

export default Child;
