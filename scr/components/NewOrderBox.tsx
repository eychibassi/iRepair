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
  const [custo, setCusto] = useState<number | string>('');

  // Ajuste aqui a sua margem (ex: 0.4 = 40%, 0.5 = 50%)
  const MARGEM = 0.4; 

  // Cálculos automáticos
  const valorCusto = Number(custo) || 0;
  const valorFinal = valorCusto * (1 + MARGEM);
  const lucro = valorFinal - valorCusto;

  //Função que será chamada ao clicar no botão
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar

    if (!nomeCliente || !modeloAparelho || !problema) return; // Validação simples

    const novaOS: ServiceOrder = {
      id: Date.now().toString(), //Gera um ID único baseado no tempo
      nomeCliente,
      modeloAparelho,
      problema,
      status: 'aberto',
      custo: Number(custo),
      valorFinal: valorFinal, // aquela variável que calculamos com a margem
      lucro: lucro,
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
{/* Seleção de Cliente */}
{/* Campo de Busca de Cliente */}
<div className="flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
  Cliente
  </label>
  <div className="relative">
    <input 
      list="clientes-list"
      placeholder="Buscar ..."
      className="
        w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700
      "
    />
    {/* Datalist Ficticio */}
    <datalist id="clientes-list">
      <option value="João Silva" />
      <option value="Maria Oliveira" />
      <option value="Marcos Souza" />
      <option value="Ricardo Pereira" />
    </datalist>
  </div>
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
{/* Custos Operacionais */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
          Custos Operacionais (Peças + Mão de Obra)
        </label>
        <input 
          type="number" 
          value={custo}
          onChange={(e) => setCusto(e.target.value)}
          placeholder="R$ 0,00"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
        />
      </div>

      {/* Valor Final para o Cliente (Calculado automaticamente) */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
          Valor Recebido (Pago pelo Consumidor Final)
        </label>
        <input 
          type="text" 
          readOnly
          value={valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
        />
      </div>

      {/* Indicador de Lucro */}
<div className="col-span-2 flex flex-col gap-2 mt-2">

  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Margem Fixa ({MARGEM * 100}%)
  </label>
  
  <div className="w-full p-4 bg-green-100 border-none rounded-xl flex items-center justify-center transition-all">
    <span className="text-xl font-black text-green-800">
      LUCRO  = {lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </span>
  </div>
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