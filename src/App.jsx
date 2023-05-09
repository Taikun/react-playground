import imgUno from "./assets/images/giphy.gif";
import ItemFruit from "./components/ItemFruit";
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";

const App = () => {
  const title = "Hello, soy React";
  const classTitle = "text-center";
  const fruits = ["🍅", "🍌", "🍐"];
  const user = true;
  //const pathImg = "src/assets/images/giphy.gif";

  return (
    <>
      <h1 className={classTitle}>{title}</h1>
      <img src={imgUno} alt={`imagen-${title}`} />
      <MyButton text="botón 1" />
      <MyButton text="botón 2" />
      <MyButton text="botón 3" />

      <WelcomeText user={user}></WelcomeText>

      <ul>
        {fruits.map((fruit, index) => (
          <ItemFruit key={index} name={fruit} />
        ))}
      </ul>
    </>
  );
};

export default App;
