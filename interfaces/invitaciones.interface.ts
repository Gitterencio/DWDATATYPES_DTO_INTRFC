
//estado puede ser => ['espera','aceptada','rechazada','cancelada']
export interface Invitaciones{
    readonly _id :string;
    readonly user: string;
    readonly invitado: string;
    readonly proyecto: string;
             estado: 'espera'|'aceptada'|'rechazada'|'cancelada';
    readonly createdAt: Date;
}