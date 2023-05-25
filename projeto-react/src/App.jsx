import MyComponent from "./components/MyComponent";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>

      <MyComponent />

      <MyButton conteudo="me clique" />

      <MyButton conteudo="depois aqui" />

      <MyButton conteudo="e por fim aqui" />
    </div>
  );
}

// function MyButton(props) {
//   return (
//     <button>{props.conteudo}</button>
//   )
// }

export default App;
