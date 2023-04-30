export interface CreatePlanDTO{
    readonly name : string;
    readonly descripcion : string;
    readonly precio : Number;
    readonly limitProyectos : Number;
    readonly limitInvitadosProyectos : Number;
}

export interface UpdatePlanDTO{
    readonly id : string;
    readonly name : string;
    readonly descripcion : string;
    readonly precio : Number;
    readonly limitProyectos : Number;
    readonly limitInvitadosProyectos : Number;
}