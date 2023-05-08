import imgUno from "./assets/images/giphy.gif";
import MyButton from "./components/MyButton";

const OnlineText = () => {
  return <p>Usuario logueado</p>;
};

const OfflineText = () => {
  return <p>Usuario no logueado</p>;
};

console.log(imgUno);

const fruits = ["🍅", "🍌", "🍐"];

const ItemFruta = (props) => {
  return <li>{props.name}</li>;
};

const WelcomeText2 = ({ user }) =>
  user ? <OnlineText></OnlineText> : <OfflineText></OfflineText>;

const WelcomeText = ({ user }) => {
  if (user) {
    return <OnlineText></OnlineText>;
  } else {
    return <OfflineText></OfflineText>;
  }
};

const App = () => {
  const title = "Hello, soy React";
  const classTitle = "text-center";

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
      <WelcomeText2 user={user}></WelcomeText2>

      {user ? <OnlineText></OnlineText> : <OfflineText></OfflineText>}
      <ul>
        {fruits.map((fruit, index) => (
          <ItemFruta key={index} name={fruit} />
        ))}
      </ul>
    </>
  );
};

export default App;
