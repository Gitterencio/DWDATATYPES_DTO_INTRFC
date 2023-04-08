export interface CreateUserDTO{
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export interface LoginIdUserDTO{
    readonly id: string;
    readonly password: string;
}