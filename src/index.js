import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client'


const container = document.getElementById('root');
const root = createRoot(container);
// ReactDOM.render(<App />, document.getElementById('root'));
root.render(<App />);

