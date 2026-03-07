import React, { useState } from 'react';
import { ServiceOrder, Status } from '../types';

interface NewOrderBoxProps {
  onAddOrder: (newOrder: ServiceOrder) => void;
}

export const NewOrderBox = ({ onAddOrder }: NewOrderBoxProps) => {
  //Capturar os dados do formulário
  const [nomeCliente, setNomeCliente] = useState('');
  const [modeloAparelho, setModeloAparelho] = useState('');
  const [problema, setProblema] = useState('');

  //Função que será chamada ao clicar no botão
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar

    if (!nomeCliente || !modeloAparelho || !problema) return; // Validação simples

    const novaOS: ServiceOrder = {
      id: Date.now().toString(), //Gera um ID único baseado no tempo
      nomeCliente,
      modeloAparelho,
      problema,
      status: 'aberto'
    };

    onAddOrder(novaOS); //Envia para o App.tsx

    //Limpa o formulário após enviar
    setNomeCliente('');
    setModeloAparelho('');
    setProblema('');
  };
  return (
    <section className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-50">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          Registrar Novo Reparo
        </h2>
        <p className="text-slate-400 font-medium mt-1">Insira os detalhes técnicos da nova OS.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-6">
        {/* Lado Esquerdo: Dados do Cliente */}
<div className="flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Nome do Cliente
  </label>
  <input 
    type="text"
    value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)} 
    placeholder="Ex: Sophia"
    className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
  />
</div>

{/* Lado Direito: Equipamento */}
<div className="flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Aparelho / Modelo
  </label>
  <input 
    type="text"
    value={modeloAparelho}
            onChange={(e) => setModeloAparelho(e.target.value)} 
    placeholder="Ex: iPhone 15 Pro"
    className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
  />
</div>

{/* Área de Descrição */}
<div className="col-span-2 flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Descrição do Defeito
  </label>
  <textarea 
    rows={3}
    value={problema}
            onChange={(e) => setProblema(e.target.value)}
    placeholder="Descreva o problema relatado pelo cliente..."
    className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700 resize-none"
  />
</div>

        {/* Botão de Ação */}
        <div className="col-span-2 pt-4">
           
  {/*botão do tipo submit para disparar o form */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]">
            GERAR ORDEM DE SERVIÇO
          </button>
          
        </div>
      </form>
    </section>
  );
};