import { useState } from "react";

const ButtonState = () => {
  

  const [count, setCount] = useState(1);

  // const stateNumber = arrayState[0];
  // const stateFuction = arrayState[1];

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>ButtonState: {count}</button>;
};

export default ButtonState;
