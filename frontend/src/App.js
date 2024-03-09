import './App.css';
import AppNavBar from './components/AppNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LessonList from './components/LessonList';

function App() {
  return (
    <Router>
      <AppNavBar/>
      <Routes>
        <Route path="/" element={<LessonList/>}/>
        <Route path="/vocabKanji" element={<h1>vocabKanji component</h1>}/>
        <Route path="/notes" element={<h1>Notes component</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
