
import React, { useState } from 'react';
import { NewOrderBox } from '../components/NewOrderBox';
import { ServiceList } from '../components/ServiceList';
import { ServiceOrderCard } from '../components/ServiceCard';
import { ServiceOrder } from '../types';


  export const OrdersPage = () => {
  // Criando dados fictícios para visualizar os cards AGORA
  const [orders, setOrders] = useState<ServiceOrder[]>([
    {
      id: "1",
      nomeCliente: "Eduardo Kenzo",
      modeloAparelho: "iPhone 13 Pro",
      problema: "Troca de tela e conector de carga. Aparelho sofreu queda em líquido.",
      status: "aberto",
      custo: 500,
      valorFinal: 1200,
      lucro: 700,
    },
    {
      id: "2",
      nomeCliente: "Guilherme Kazuo",
      modeloAparelho: "MacBook Air M1",
      problema: "Limpeza interna e troca de pasta térmica. Superaquecimento.",
      status: "aberto",
      custo: 150,
      valorFinal: 450,
      lucro: 300,
    }
  ]);
  return (
    <div className="max-w-[1400px] mx-auto p-4 pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4">
          
          <NewOrderBox onAddOrder={(nova) => setOrders([nova, ...orders])} />
        </div>

        <div className="lg:col-span-8">
          
          <ServiceList 
            orders={orders} 
            onDelete={(id) => setOrders(orders.filter(o => o.id !== id))} 
            onFinish={(id) => setOrders(orders.map(o => o.id === id ? {...o, status: 'finalizado'} : o))} 
          />
        </div>

      </div>
    </div>
  );
};