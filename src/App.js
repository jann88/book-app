
// import './App.css';
import { BrowserRouter as Router, Routes, Route, }  from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import BookList from './pages/BookList'
import Editbook from './pages/Editbook';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookList/>}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
        <Route path="/books/:id/edit" element={<Editbook/>}></Route>
        <Route path="/books/:id/delete" ></Route>
      </Routes>
    </Router>
</>
  );
}

export default App;
