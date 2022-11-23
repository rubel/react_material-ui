import './App.css';
import {Routes,Route} from "react-router-dom"
import BasicMuiForm from './BasicMuiForm';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<BasicMuiForm />} />
        </Routes>
    </div>
  );
}

export default App;
