//importa o useState do React e a interface Service Order do arquivo index.ts
import React from 'react';
import { useState } from 'react';
import { ServiceOrder } from './types';
import { Header } from './components/Header';
import { NewOrderBox } from './components/NewOrderBox';
import { ServiceList } from './components/ServiceList';



function App() {
    const [orders, setOrders] = useState<ServiceOrder[]>([]);
    /*chama o usestate para armazenar (orders) e atualizar (setorders) a lista, que começa
    vazia e só aceita objetos com o formato da interface.  
    */
    const addOrder = (newOrder: ServiceOrder) =>{ //argumento newOrder do tipo ServiceOrder
      console.log("Nova ordem recebida no App:", newOrder);
        setOrders([...orders, newOrder]);
        //chama o setOrders para comunicar uma alteração na lista
        //nesse caso a adição de um novo elemento no final, logo após o spread(...)
    };
    const deleteOrder = (id: string) => {
  setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
}; //função para excluir uma OS

const finishOrder = (id: string) => {
  setOrders(prevOrders => 
    prevOrders.map(order => 
      order.id === id 
        ? { 
            ...order, 
            status: 'finalizado', 
            finishedAt: Date.now() // <--- Adiciona o carimbo do momento exato do clique
          } 
        : order
    )
  );
}; //função para finalizar uma OS

    
return ( //prop orders passa os dados para o filho(ListaServicos) para eles trabalharem
    <div className="app-container">
            <Header />
    {/* Container principal com Grid para o Box ficar à esquerda */}
      <main className="max-w-[1600px] mx-auto px-10 grid grid-cols-12 gap-8">
        
        {/* COLUNA DA ESQUERDA */}
        <aside className="col-span-4">
                  <NewOrderBox onAddOrder={addOrder} />
                </aside>

        {/* COLUNA DA DIREITA - onde ficará a lista) */}
        <section className="col-span-8">
          <ServiceList orders={orders} onDelete={deleteOrder} onFinish={finishOrder}/>
        </section>

      </main>
    </div>
  );
}

export default App;