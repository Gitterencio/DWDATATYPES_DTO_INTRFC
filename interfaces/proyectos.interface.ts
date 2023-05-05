export interface Proyectos{
    readonly _id :string;
    name: string;
    html_text: string;
    css_text: string;
    js_text: string;
    readonly user: string;
    readonly createdAt: Date;
}