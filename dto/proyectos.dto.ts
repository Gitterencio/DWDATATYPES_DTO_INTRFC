export interface CreateProyectoDTO{
    readonly name: string;
    readonly user: string;
}

export interface UpdateProyectoDTO{
    readonly _id: string;
    readonly name: string;
    readonly html_text: string;
    readonly css_text: string;
    readonly js_text: string;
}