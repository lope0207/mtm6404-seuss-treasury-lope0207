import { useState, useEffect } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      <h2>Quotes</h2>
      {loading && <p>Loading quotes...</p>}
      {error && <p>Error: {error}</p>}
      {quotes.length === 0 && !loading && !error && <p>No quotes found.</p>}
      <ul className="quotes-list">
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuotesPage;
