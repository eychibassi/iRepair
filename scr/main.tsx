import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'// Aqui ele puxa o seu arquivo App.tsx
import './index.css'   // Aqui ele puxa o seu CSS global

console.log("O main.tsx carregou!");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)