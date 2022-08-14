import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import BasicMuiForm from './BasicMuiForm';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<BasicMuiForm />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
