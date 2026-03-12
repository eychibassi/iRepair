import { api } from './api';
import { Client, CreateClientData } from '../types';

export const clientService = {
  getAll: async (): Promise<Client[]> => {
    const response = await api.get('/clients');
    return response.data.data; 
  },

  create: async (client: CreateClientData): Promise<Client> => {
    const response = await api.post('/clients', client);
    return response.data.data;
  },

  delete: async (id: number): Promise<void> => { 
    await api.delete(`/clients/${id}`);
  }
};