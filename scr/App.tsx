//importa o useState do React e a interface Service Order do arquivo index.ts
import { useState } from 'react';
import { ServiceOrder } from './types';
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
    <main> 
        <ServiceList orders={orders} />
    </main>
    );
}
export default App;