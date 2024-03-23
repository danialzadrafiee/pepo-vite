import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
document.title = import.meta.env.VITE_APP_TITLE;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
