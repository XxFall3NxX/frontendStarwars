import { useState } from 'react';

const Home = () => {
  const [character, setCharacter] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch(`/api/character?name=${character}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Star Wars Character Search</h1>
      <input
        type="text"
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        placeholder="Enter character name"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {results && (
        <div>
          <h2>Search Results for {character}</h2>
          <table border="1" style={{ width: '100%', marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Film</th>
                <th>Vehicle</th>
              </tr>
            </thead>
            <tbody>
              {results.films.map((film, index) => (
                <tr key={index}>
                  <td>{film.title}</td>
                  <td>{results.vehicles[index]?.name || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
