export interface Planes{
    readonly _id :string;
    readonly name : string;
    readonly descripcion : string;
    readonly precio : Number;
    readonly limitProyectos : Number;
    readonly limitInvitadosProyectos : Number;
    readonly createdAt : Date;
}