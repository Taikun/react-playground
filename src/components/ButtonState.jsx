const ButtonState = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log("handleClick: " + count);
  };

  return <button onClick={handleClick}>ButtonState: {count}</button>;
};

export default ButtonState;
