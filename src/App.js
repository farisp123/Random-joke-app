import React, { useState } from 'react';
import { RiRefreshLine } from 'react-icons/ri';
import { ImSpinner2 } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // Track button click

  const getRandomJoke = async () => {
    setLoading(true);
    setButtonClicked(true); // Update button click status
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setJoke(`${data.setup} ${data.punchline}`);
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      {!buttonClicked && ( // Conditionally show the h2 tag
        <h2 className="text-center mb-4">Hi, Welcome to JokeMaster 😄</h2>
      )}
      <div className="joke-container">
        {loading ? (
          <div className="loading-container">
            <ImSpinner2 className="spinner" />
          </div>
        ) : (
          <p className="joke">{joke}</p>
        )}
        <button className="btn btn-primary" onClick={getRandomJoke} disabled={loading}>
          {loading ? 'Loading...' : 'Get Joke'}
          <RiRefreshLine className="btn-icon" />
        </button>
      </div>
      <footer className="footer">
        <p className="footer-text">
          <a href="https://www.linkedin.com/in/muhammed-faris-pallipath-753259242/?originalSubdomain=in">Made with ❤️ by JokeMaster</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
