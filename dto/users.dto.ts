//DTO DATA TRANSFER OBJECT
export interface CreateUserDTO{
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export interface LoginIdUserDTO{
    readonly id: string;
    readonly password: string;
}

export interface LoginEmailUserDTO{
    readonly email: string;
    readonly password: string;
}

export interface UpdateUserDTO{
    readonly id :string;
    readonly name: string;
    readonly img: { data: any, contentType: String };
  
}