import React, { useState } from 'react';

const Make = () => {
const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  
  

  return (
    <center>
    <div className="container">
      <p className="count">Count: {count}</p>
      <button className="button" onClick={increase}>Increase</button><br /><br />
      <button className="button" onClick={decrease}>Decrease</button>
    </div>
    </center>
  );
}

export default Make;

  

// export default Make;


