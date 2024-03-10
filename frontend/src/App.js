import AppNavBar from './components/AppNavBar';
import LessonList from './components/LessonList';
import NoteList from './components/NoteList';
import CreateNote from './pages/CreateNote';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <AppNavBar/>
      <Routes>
        <Route path="/" element={<LessonList/>}/>
        <Route path="/vocabKanji" element={<h1>vocabKanji component</h1>}/>
        <Route path="/notes" element={<NoteList/>}/>
        <Route path="/createNote" element={<CreateNote/>}/>
      </Routes>
    </Router>
  );
}

export default App;
