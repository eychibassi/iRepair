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
        setOrders([...orders, newOrder]);
        //chama o setOrders para comunicar uma alteração na lista
        //nesse caso a adição de um novo elemento no final, logo após o spread(...)
    };

return ( //prop orders passa os dados para o filho(ListaServicos) para eles trabalharem
    <div className="app-container">
            <Header />
    {/* Container principal com Grid para o Box ficar à esquerda */}
      <main className="max-w-[1600px] mx-auto px-10 grid grid-cols-12 gap-8">
        
        {/* COLUNA DA ESQUERDA (Ocupa 4 de 12 colunas) */}
        <aside className="col-span-4">
          <NewOrderBox />
        </aside>

        {/* COLUNA DA DIREITA (Ocupa 8 de 12 colunas - onde ficará a lista) */}
        <section className="col-span-8">
          <ServiceList />
        </section>

      </main>
    </div>
  );
}
export default App;