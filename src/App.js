
// import './App.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/:id" ></Route>
        <Route path="/books/:id/edit" ></Route>
        <Route path="/books/:id/delete" ></Route>
      </Routes>
    </Router>
</>
  );
}

export default App;
