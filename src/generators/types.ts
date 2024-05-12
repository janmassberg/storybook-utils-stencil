export interface CodeGeneratorFn {
    (args: CodeGeneratorArgs): string;
}

export interface CodeGeneratorArgs {
    component: string;
    args: Record<string, unknown>;
    argyTypes?: Record<string, string> | undefined;
}
