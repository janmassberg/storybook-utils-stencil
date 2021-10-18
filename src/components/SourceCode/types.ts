export interface SourceCodeBlockGroup {
    title: string;
    name: string;
}

export interface SourceCodeBlockItem {
    code: string;
    language: SourceCodeLanguage;
    title?: string;
}

export interface SourceCodeBlocks {
    [key: string]: SourceCodeBlockItem[];
}

export type SourceCodeLanguage =
    | "html"
    | "javascript"
    | "jsx"
    | "typescript"
    | "css";
