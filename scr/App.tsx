import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Clients } from './pages/Clients';
import { Header } from './components/Header';
import { NewOrderBox } from './components/NewOrderBox';
import { ServiceList } from './components/ServiceList';
import { OrdersPage } from './pages/ServiceOrders';
import { Dashboard } from './pages/Dashboard';

export function App() {
  return (
    <BrowserRouter>
      
      <Header /> 
      
      <main>
  <Routes>
    {/* Mude a rota raiz para a Dashboard */}
    <Route path="/" element={<Dashboard orders={[]} />} />
    
    <Route path="/" element={<Dashboard orders={[]} />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/orders" element={<OrdersPage />} /> 
  </Routes>
</main>
    </BrowserRouter>
  );
}

export default App;