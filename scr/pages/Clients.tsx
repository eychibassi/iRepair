import React, { useEffect, useState } from 'react';
import { clientService } from '../services/clientService';
import { Client } from '../types';
import { NewClientBox } from '../components/NewClientBox'; 

export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadClients = async () => {
    try {
      setIsLoading(true);
      const data = await clientService.getAll();
      setClients(data);
    } catch (error) {
      console.error("Error loading clients:", error);
    } finally {
      setIsLoading(false);
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
        <section className="bg-slate-50 rounded-[2.5rem] p-10 border-2 border-dashed border-slate-200 min-h-[700px] flex flex-col items-center justify-center text-center">
            <div className="opacity-30">
                <p className="text-xl font-black italic uppercase text-slate-400 tracking-widest">
                  Lista de Clientes
                </p>
            </div>
        </section>

      </div>
    </div>
  );
};