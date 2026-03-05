/**define o tipo Status e a interface ServiceOrder e adicona o export para permitir que
outras seções tenham acesso a essa informação.
**/
export type Status = 'aberto' | 'finalizado'

export interface ServiceOrder{
    id: string;
    nomeCliente: string;
    modeloAparelho: string;
    problema: string;
    status: Status;
}