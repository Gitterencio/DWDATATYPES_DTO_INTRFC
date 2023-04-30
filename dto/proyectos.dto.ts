export interface CreateProyectoDTO{
    readonly name: string;
    readonly user: string;
}

export interface SearchProyectoDTO{
    readonly id: string;
}

export interface SearchProyectosUserDTO{
    readonly userId: string;
}

export interface UpdateProyectoDTO{
    readonly id: string;
    readonly name: string;
    readonly html_text: string;
    readonly css_text: string;
    readonly js_text: string;
}