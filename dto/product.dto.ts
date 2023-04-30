//DTO DATA TRANSFER OBJECT
export interface CreateProductDTO{
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}