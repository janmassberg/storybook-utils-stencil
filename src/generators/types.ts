export interface CodeGeneratorArgs {
    component: string;
    args?: Record<string, unknown> | undefined;
    propsTypes?: Record<string, string> | undefined;
}
