import React, { useState } from 'react';
import { Client } from '../types';
import { Search, Phone, Mail, Trash2, User, Filter } from 'lucide-react';
import { ClientCard } from './ClientCard';

interface ClientListProps {
  clients: Client[];
  isLoading: boolean;
  onDelete: (id: number) => void;
}


export const ClientList = ({ clients, isLoading, onDelete }: ClientListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterActiveOS, setFilterActiveOS] = useState(false);

  // Lógica de Filtro Duplo: Nome + OS Ativa
  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
    // Se o filtro estiver ativo, só mostra clientes que tenham alguma OS aberta
    const matchesFilter = filterActiveOS ? client.hasActiveOS : true;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col h-full">
      {/* HEADER*/}
      <header className="mb-12 flex flex-col items-center relative">
        
        {/* Título Centralizado */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            - CLIENTES CADASTRADOS -
          </h2>
          {/* Contador */}
          <div className="flex items-center justify-center gap-2 mt-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <User size={14} />
            <span>Total: {clients.length}</span>
          </div>
        </div>

     
  {/* Barra de Busca e Filtro Lado a Lado */}
        <div className="mt-8 flex items-center gap-3 w-full max-w-sm">
          {/* Input de Busca */}
          <div className="relative group flex-1">
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" 
              size={16} 
            />
            <input
              type="text"
              placeholder="PESQUISAR ..."
              className="w-full pl-10 pr-4 py-3 bg-blue-100 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-500 focus:bg-blue-100 transition-all font-bold text-[10px] tracking-widest uppercase text-slate-800 placeholder:text-slate-400 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Botão de Filtro de OS */}
          <button
  onClick={() => setFilterActiveOS(!filterActiveOS)}
  className={`flex items-center justify-center w-[52px] h-[52px] rounded-2xl transition-all border-2 ${
    filterActiveOS 
      ? 'border-blue-500 text-blue-600 shadow-sm'
      : 'bg-white border-slate-100 text-slate-400 hover:text-blue-500'
  }`}
>
  <Filter size={20} strokeWidth={2.5} />

  
</button>
        </div>
      </header>

      {isLoading ? (
  <div className="flex-1 flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
  </div>
) : filteredClients.length > 0 ? (
  /* Se tem clientes, mostra o Grid */
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
    {filteredClients.map((client) => (
      <ClientCard 
        key={client.id} 
        client={client} 
        onDelete={onDelete} 
      />
    ))}
  </div>
) : (
  /* Se NÃO tem clientes (vazio), mostra a mensagem*/
  <div className="flex flex-col items-center justify-center py-8 px-6 bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-100 -mt-4">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
      <User className="text-slate-200" size={32} />
    </div>
    <p className="text-slate-500 font-black text-xs uppercase tracking-[0.2em]">
      Nenhum cliente encontrado
    </p>
    <p className="text-slate-400 text-[10px] font-bold uppercase mt-2">
      Ajuste sua busca ou cadastre um novo cliente
    </p>
  </div>
)}
    </div>
  );
};
