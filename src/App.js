import logo from './logo.svg';
import './App.css';
import upper, {text1, text2, text3} from "./file";
import person, {males, females, listOf} from "./file2";
import MultiWelcome from "./file3";


function App() {
  return (
    <div className="App">
      
      {text1}-{text2}-{text3}
      <p>{upper("default function")}</p>

      <p>{firstName} at {email}</p>

      <h2><MultiWelcome /></h2>
    </div>
  );
}


const {firstName, email} = person;

let combine = [...males, ...females]
console.log(combine)

export default App;
