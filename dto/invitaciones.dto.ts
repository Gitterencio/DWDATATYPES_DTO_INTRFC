export interface CreateInvitacionDTO{
    readonly invitado: string;
    readonly proyecto: string;

}

export interface UpdateEstadoInvitacionDTO{
    readonly id: string;
    readonly estado: string;

}