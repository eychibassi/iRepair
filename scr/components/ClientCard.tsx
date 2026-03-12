import React from 'react';
import { Phone, Mail, Trash2, ExternalLink, X, Calendar } from 'lucide-react';
import { Client } from '../types';

interface ClientCardProps {
  client: Client;
  onDelete: (id: number) => void;
}


export const ClientCard = ({ client, onDelete }: ClientCardProps) => {
  
  const hasOpenOS = client.hasActiveOS;
    // Formata a data para: DD/MM/AAAA
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Data n/a';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };
 return (
    <div className="
      relative flex flex-col min-h-[160px] p-6
      bg-white rounded-[2.5rem] 
      /* Borda azul padrão em todo o contorno */
      border-2 border-blue-600
      
      /* Efeitos de Interação: Zoom e Brilho */
      hover:scale-[1.03] 
      hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)]
      
      /* Transição suave */
      transition-all duration-300 ease-in-out
      cursor-pointer
    ">
      
   
      {/* Botão de Fechar/Remover no canto superior direito */}
      <button 
        onClick={() => onDelete(client.id)}
        className="
    absolute right-6 top-6 
    text-slate-300 
    /* Efeitos de Hover no X */
    hover:text-red-500 
    hover:scale-115      /* Zoom bem forte (50% maior) */
    active:scale-90     /* Efeito de 'clique' (encolhe um pouco) */
    
    /* Transição suave para a cor e o tamanho */
    transition-all duration-200 ease-out
    z-20 p-1
  "
>
  <X size={20} strokeWidth={3} /* Deixando o ícone um pouco mais grosso */ />
     
      </button>

      <div className="pl-4">
        {/* ID discreto como no print */}
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          ID: {client.id}
        </span>

        {/* Nome do Cliente - Fonte Robusta */}
        <div className="flex items-center justify-between mt-4">
    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
      {client.name}
    </h3>
    
    {/* Badges */}
  {client.hasActiveOS && (
    <div className="
      flex-shrink-0 
      px-4 py-1.5 
      rounded-full 
      text-[10px] font-black uppercase tracking-wider
      bg-green-400/20
      text-green-600
      border-2 border-green-600/50
      shadow-[0_0_15px_rgba(34,197,94,0.3)]
      animate-[pulse_4s_infinite_ease-in-out]
    ">
      <span className="mr-1">●</span> OS Aberta
    </div>
  )}
</div>
        
        {/* Seção de detalhes */}
<div className="mt-8">
  {/* Aumentei o gap para 6 (24px) para dar o efeito de "parágrafo" */}
  <div className="flex flex-col gap-4"> 
    
    <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
      <Phone size={17} className="text-blue-600" />
         {client.phone}
    </div>

    <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
      <Mail size={17} className="text-blue-600" />
      <span className="lowercase">   {client.email}</span>
    </div>
    
  </div>
</div>
      </div>

     {/* Data de Criação no lugar do botão */}
      <div className="mt-4 flex justify-end items-center gap-1.5 opacity-60">
        <Calendar size={12} className="text-slate-600" />
        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
         {formatDate(client.created_at)}
        </span>
      </div>
    </div>
  );
};