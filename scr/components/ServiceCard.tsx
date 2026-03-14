import React from 'react';
import { ServiceOrder, Status } from '../types';

interface CardProps {
  order: ServiceOrder;
  onDelete: (id: string) => void;
  onFinish: (id: string) => void; 
}


export const ServiceOrderCard = ({ order,onDelete, onFinish }: CardProps) => {
  const isAberto = order.status === 'aberto';

  const dataCriacao = new Date(Number(order.id)).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
  const dataConclusao = order.finishedAt 
  ? new Date(order.finishedAt).toLocaleDateString('pt-BR', {
       day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
    })
  : null;

  return (
    <div className={`
  relative overflow-hidden p-5 rounded-2xl border border-slate-200 
  transition-all duration-300 group border-l-[6px] mb-4

  /* Lógica de Fundo, Borda e Sombra */
  ${isAberto 
    ? 'bg-white border-l-blue-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1' 
    : 'bg-rose-200 border-l-slate-400 shadow-none opacity-80'}
`}>
      
      {/* BOTÃO DE EXCLUIR OS*/}
      <div className="absolute top-4 right-4">
        <button 
        onClick={() => onDelete(order.id)}
          className="
            p-2 rounded-lg text-slate-400 bg-transparent
            hover:bg-rose-200 hover:text-rose-500 hover:scale-110 active:scale-90
            transition-colors duration-200
          "
        >
          {/* Ícone de X */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3">
  {/* Cabeçalho */}
  <div>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
      ID: {order.id.slice(-6)}
    </span>
    <h4 className="font-bold text-slate-900 text-lg leading-tight">
      {order.nomeCliente} 
      <span className="text-slate-900"> - {order.modeloAparelho}</span>
    </h4>
  </div>

  {/* Detalhes do Aparelho + Valores Financeiros */}
<div className="flex flex-col gap-3">
  <div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
      Descrição do Defeito:
    </p>
    <p className="font-bold text-slate-900 text-[14px] leading-tight">
      {order.problema}
    </p>
  </div>

  {/* Linha de Valores - Lucro na Direita */}
<div className="flex justify-between items-end pt-3 border-t border-slate-50">
  {/* Esquerda: Valor do Cliente */}
  <div className="flex flex-col">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
      Valor Final
    </p>
    <p className="font-black text-slate-900 text-base leading-none mt-1">
      {order.valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
  </div>
  
  {/* Direita: Seu Lucro */}
  <div className="flex flex-col items-end">
    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest italic leading-none">
      Lucro Gerado
    </p>
    <p className="font-black text-green-600 text-base leading-none mt-1">
      +{order.lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
  </div>
</div>
</div>
</div>

        {/* Rodapé com DATA e Ação */}
<div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-50">
  
  {/* Agrupador de Datas (para elas ficarem juntas à esquerda) */}
  <div className="flex items-center gap-2">
    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
      {dataCriacao}
    </span>

    {/* Só aparece se estiver finalizado */}
    {!isAberto && dataConclusao && (
      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
        - CONCLUÍDA EM: {dataConclusao}
      </span>
    )}
  </div>
          

          {isAberto && (
            <button 
            onClick={() => onFinish(order.id)}
            className="
              text-[10px] font-black text-white bg-blue-600 
              px-4 py-2 rounded-lg shadow-sm
              hover:bg-blue-700  hover:scale-105 active:scale-95 transition-transform
              uppercase tracking-widest
            ">
              Finalizar
            </button>
          )}
        </div>
      </div>
    
  );
};