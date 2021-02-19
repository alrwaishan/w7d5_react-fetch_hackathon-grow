import QuizDisplay from '../QuizDisplay';
import './App.css';
import GetPokemonAvatar from '../GetPokemonAvatar'

function App() {
  return (
    <div className="App">
      <h1>Look, It's working!</h1>
      <GetPokemonAvatar />
      <QuizDisplay/>
    </div>
  );
}

export default App;
