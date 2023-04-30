export interface Users{
    readonly _id :string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly img: { data: any, contentType: String };
    readonly createdAt: Date;
}