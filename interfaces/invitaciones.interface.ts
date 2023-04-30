
//estado puede ser => ['espera','aceptada','rechazada','cancelada']
export interface Invitaciones{
    readonly _id :string;
    readonly user: string;
    readonly proyecto: string;
    readonly estado: string;
    readonly createdAt: Date;
}