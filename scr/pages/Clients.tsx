import React, { useEffect, useState } from 'react';
import { clientService } from '../services/clientService';
import { Client } from '../types';
import { NewClientBox } from '../components/NewClientBox';
 import { ClientList } from '../components/ClientList';


export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadClients = async () => {
    try {
      setIsLoading(true);
      //const data = await clientService.getAll();
      //setClients(data);
      //DADOS FICTÍCIOS PARA VIZUALIZAR OS CARDS
    const mockData: Client[] = [
  {
    id: 1,
    name: "Eduardo Kenzo",
    email: "joao@mecanica.com",
    phone: "(11) 98888-7777",
    hasActiveOS: true,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    name: "Guilherme Kazuo",
    email: "contato@silva.com",
    phone: "(11) 91234-5678",
    hasActiveOS: false,
    created_at: new Date().toISOString()
  }
];
    
    setClients(mockData);
    } catch (error) {
      console.error("Error loading clients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClient = async (id: number) => {
    if (!confirm("Tem certeza que deseja remover este cliente?")) return;
    try {
      await clientService.delete(id);
      setClients(prev => prev.filter(client => client.id !== id));
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir cliente.");
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="px-10 pt-10 pb-10 max-w-[1600px] mx-auto">
      {/* Grid principal*/}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
        
        {/* LADO ESQUERDO: Apenas o Box de Cadastro */}
        <aside>
          <NewClientBox onClientAdded={loadClients} />
        </aside>

        {/* LADO DIREITO: Espaço reservado para a lista */}
        <section className="min-h-[700px]">
  <ClientList 
    clients={clients} 
    isLoading={isLoading} 
    onDelete={handleDeleteClient} 
  />
</section>

      </div>
    </div>
  );
};