export default async function handler(req, res) {
    const { name } = req.query;
  
    const query = `
      query {
        character(name: "${name}") {
          name
          films {
            title
          }
          vehicles {
            name
          }
        }
      }
    `;
  
    try {
      const response = await fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const { data } = await response.json();
      res.status(200).json(data.character);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  