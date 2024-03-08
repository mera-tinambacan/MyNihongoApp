import './App.css';
import AppNavBar from './components/AppNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavBar/>
      <Routes>
        <Route path="/" element={<h1>Home component</h1>}/>
        <Route path="/vocabKanji" element={<h1>vocabKanji component</h1>}/>
        <Route path="/notes" element={<h1>Notes component</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
