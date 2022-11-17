import './App.css';
import ListTask from './components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <h1>TODO List</h1>
      <ListTask/>
    </div>
  );
}

export default App;