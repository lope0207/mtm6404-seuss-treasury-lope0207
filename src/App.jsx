import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import BooksPage from './BooksPage';
import BookDetailsPage from './BookDetailsPage';
import QuotesPage from './QuotesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
