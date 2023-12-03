import Main from './Views/Main';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';


function App() {

  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
