export interface CreateSnippetDTO{
    readonly name: string;
    readonly script: string;
    readonly user: string;
}

export interface UpdateScriptSnippetDTO{
    readonly id: string;
    readonly script: string;
}