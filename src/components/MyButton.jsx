const MyButton = ({text}) => {
    const handleClick = (title) => {
      alert("handle click: " + title);
    };
    return <button onClick={() => handleClick(text)}>{text}</button>; // Realmente el text dentro del handleClick no es necesario, ya que se puede acceder a la variable text directamente
  };

export default MyButton;
