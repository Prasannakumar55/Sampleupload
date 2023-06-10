import './App.css';
import Load from './Components/Load';
import Errors from './Components/Errors';
import Vuethree from './Components/Vuethree';

function App() {
  return (
    <div className="App">
       <Load/>
       <Errors/>
       <Vuethree/>
    </div>
  );
}

export default App;
