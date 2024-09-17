const ResultTable = ({ films, vehicles }) => (
    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Film</th>
          <th>Vehicle</th>
        </tr>
      </thead>
      <tbody>
        {films.map((film, index) => (
          <tr key={index}>
            <td>{film.title}</td>
            <td>{vehicles[index]?.name || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default ResultTable;
  