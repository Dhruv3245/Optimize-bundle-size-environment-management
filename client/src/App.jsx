import React, { useState, Suspense, useEffect } from 'react';
import './App.css';

// Lazy load component (bundle optimization)
const LazyBox = React.lazy(() => import('./LazyBox'));

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  // Environment variables
  const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const TITLE = import.meta.env.VITE_APP_TITLE || 'My AWT Practical';

  useEffect(() => {
    fetch(`${API}/api/data`)
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <h1>{TITLE}</h1>

      <h3>Backend Data:</h3>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}

      <button onClick={() => setShow(true)}>Load Component</button>

      {show && (
        <Suspense fallback={<p>Loading Lazy Component...</p>}>
          <LazyBox />
        </Suspense>
      )}
    </div>
  );
}

export default App;