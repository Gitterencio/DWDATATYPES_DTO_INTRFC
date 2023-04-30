export interface CreateInvitacionDTO{
    readonly user: string;
    readonly invitado: string;
    readonly proyecto: string;

}

export interface UpdateEstadoInvitacionDTO{
    readonly id: string;
    readonly estado: string;

}