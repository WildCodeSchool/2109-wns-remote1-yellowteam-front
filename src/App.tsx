import React, { useEffect, useState } from 'react';
import { apiUrl } from './settings';
import './App.css';

function App(): JSX.Element {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`${apiUrl}/dummy-endpoint`);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unknown error'));
        }
      }
    };

    fetchMessage();
  });
  return (
    <div className="App">
      <h1>React template</h1>
      {message && <p>Message received from server: {message}</p>}
      {error && <p>Error while fetching: {error?.message}</p>}
    </div>
  );
}

export default App;
