import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Clients } from './pages/Clients';
import { Header } from './components/Header';
import { NewOrderBox } from './components/NewOrderBox';
import { ServiceList } from './components/ServiceList';
import { OrdersPage } from './pages/ServiceOrders';

export function App() {
  return (
    <BrowserRouter>
      
      <Header /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/orders" element={<OrdersPage />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;