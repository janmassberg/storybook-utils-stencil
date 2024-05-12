export interface CodeGeneratorArgs {
    component: string;
    args: Record<string, unknown>;
    propsTypes?: Record<string, string> | undefined;
}
