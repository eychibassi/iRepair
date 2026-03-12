import React, { useState } from 'react';
import { clientService } from '../services/clientService';
import { UserPlus, Phone, Mail, Hash } from 'lucide-react'; // Ícones para dar um toque premium

interface NewClientBoxProps {
  onClientAdded: () => void; // Função para atualizar a lista no pai
}

export const NewClientBox = ({ onClientAdded }: NewClientBoxProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await clientService.create(formData);
      setFormData({ name: '', email: '', phone: ''}); // Limpa o form
      onClientAdded(); // Avisa o pai para recarregar a lista
      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar cliente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 border-2 border-blue-600 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sticky top-32">
      {/* Cabeçalho do Card */}
      <div className="mb-8">
  <h2 className="text-3xl font-black text-slate-800 tracking-tight">
    Cadastrar Novo Cliente
  </h2>
  <p className="text-slate-400 font-medium mt-1">Preencha os dados para registro no sistema.</p>
</div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Campo: Nome */}
        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">Nome Completo</label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Ex: Eduardo Kenzo"
              className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        {/* Campo: WhatsApp */}
        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">WhatsApp</label>
          <input
            type="text"
            required
            placeholder="Ex: (00) 00000-0000"
            className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Campo: E-mail */}
        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">E-mail</label>
          <input
            type="email"
            placeholder="Ex: cliente@email.com"
            className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Botão Salvar */}
        <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] py-4 rounded-2xl shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 mt-4 flex items-center justify-center gap-3"
>
  {isSubmitting ? (
    'Salvando...'
  ) : (
    <>
      <UserPlus size={22} strokeWidth={2.5} />
      <span>Salvar Cadastro</span>
    </>
  )}
</button>
      </form>
    </div>
  );
};