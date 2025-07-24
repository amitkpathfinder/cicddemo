// ----- client/src/index.js -----
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ----- client/src/App.js -----
import React from 'react';
export default function App() {
  return <h1>Hello from React!</h1>;
}
