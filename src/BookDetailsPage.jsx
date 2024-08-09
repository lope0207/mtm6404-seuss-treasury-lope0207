import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; 

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetailsPage;
