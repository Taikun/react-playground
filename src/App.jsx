import imgUno from "./assets/images/giphy.gif";
import ButtonState from "./components/ButtonState";
import ListFruits from "./components/fruits/ListFruits";
import MyButton from "./components/MyButton";
import NoControlado from "./components/NoControlado";
import Formulario from "./components/Formulario";
import WelcomeText from "./components/WelcomeText";
import Todos from "./components/Todos";

const initialStateTodos = [
  {
    id: 1,
    title: "Todo #01",
    descripcion: " Descripción #01",
    state: "pendiente",
    priority: false,
  },
  {
    id: 2,
    title: "Todo #02",
    descripcion: " Descripción #02",
    state: "pendiente",
    priority: false,
  },
  {
    id: 3,
    title: "Todo #03",
    descripcion: " Descripción #03",
    state: "pendiente",
    priority: false,
  }
];

const App = () => {
  
  const [todos, setTodos] = useState([initialStateTodos]);

  return (
    <div className="container mt-5">
      <h1 className="my-5">Formularios</h1>
      <Formulario />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
