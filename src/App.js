import './App.css';
import Info from './Components/Info/Info';
import Sidebar from './Components/Sidebar/Sidebar';
import Works from './Components/Works/Works';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Info/>
      <Works/>
    </div>
  );
}

export default App;
