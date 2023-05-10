import imgUno from "./assets/images/giphy.gif";
import ButtonState from "./components/ButtonState";
import ListFruits from "./components/fruits/ListFruits";
import MyButton from "./components/MyButton";
import NoControlado from "./components/NoControlado";
import Controlado from "./components/Controlado";
import WelcomeText from "./components/WelcomeText";

const App = () => {
  const title = "Hello, soy React";
  const classTitle = "text-center";
  const fruits = ["🍅", "🍌", "🍐"];
  const fruitsTwo = ["sandia", "melón", "mango"];

  const user = true;
  //const pathImg = "src/assets/images/giphy.gif";

  return (
    <>
      <ButtonState />
      
      <Controlado/>


      <h1 className={classTitle}>{title}</h1>
      <img src={imgUno} alt={`imagen-${title}`} />

      <MyButton text="botón 1" />
      <MyButton text="botón 2" />
      <MyButton text="botón 3" />

      <WelcomeText user={user}></WelcomeText>
      <ListFruits fruits={fruits} />
      <ListFruits fruits={fruitsTwo} />
    </>
  );
};

export default App;
