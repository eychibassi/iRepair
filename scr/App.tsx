import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Clients } from './pages/Clients';
import { Header } from './components/Header';

export function App() {
  return (
    <BrowserRouter>
      
      <Header /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;