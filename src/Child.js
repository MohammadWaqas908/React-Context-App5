import React, { useContext } from 'react';
import valueContext from './valueContext';

function Child() {
  let value = useContext(valueContext);
  console.log("value ",value);
  let updatevalue=value[1]; 
  return (
    <div>
      Child Numer is {value[0]}
      <button onClick={()=>{updatevalue(++value[0]) }}>Update Value</button>
    </div>
  );
}

export default Child;
