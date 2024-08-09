import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setBooks(data); 
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <Link to={`/books/${book.id}`}>
              <img src={book.coverImage} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
