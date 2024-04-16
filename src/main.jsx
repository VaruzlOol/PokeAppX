import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesProvider from './routes/config.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RoutesProvider />
  </React.StrictMode>,
)
