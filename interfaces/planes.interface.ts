export interface Planes{
    readonly _id :string;
    name : string;
    descripcion : string;
    precio : Number;
    limitProyectos : Number;
    limitInvitadosProyectos : Number;
    readonly createdAt : Date;
}