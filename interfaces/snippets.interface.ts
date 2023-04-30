export interface Snippets{
    readonly _id :string;
    readonly name: string;
    readonly user: string;
    readonly script: string;
    readonly createdAt: Date;
}