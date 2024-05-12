import React, { FC, useMemo } from "react";
import { SourceCode, SourceCodeBlocks } from "../SourceCode";
import {
    CodeGeneratorArgs,
    generateSourceCodeAngularComponent,
    generateSourceCodeAngularHtml,
    generateSourceCodeHtml,
    generateSourceCodeJavascript,
    generateSourceCodeReact,
    generateSourceCodeReactComponent,
    generateSourceCodeVue,
} from "../../generators";

export interface FrameworkSourceProps {
    component: string;
    args: Record<string, unknown>;
    theme: "dark" | "light";
}

/**
 * The `<FrameworkSource>` component can be used in a MDX story to display integration source for all supported frameworks
 * (HTML, Angular, React and Vue) in separate tabs.
 */
export const FrameworkSource: FC<FrameworkSourceProps> = ({
    component,
    args,
    theme,
}: FrameworkSourceProps) => {
    const codeBlocks = useMemo<SourceCodeBlocks>(() => {
        const generatorArgs: CodeGeneratorArgs = {
            component,
            args,
        };
        return {
            HTML: [
                {
                    language: "html",
                    code: generateSourceCodeHtml(generatorArgs),
                },
                {
                    language: "html",
                    code: generateSourceCodeJavascript(generatorArgs),
                },
            ],
            Angular: [
                {
                    language: "html",
                    code: generateSourceCodeAngularHtml(generatorArgs),
                },
                {
                    language: "typescript",
                    code: generateSourceCodeAngularComponent(generatorArgs),
                },
            ],
            React: [
                {
                    language: "jsx",
                    code: generateSourceCodeReact(generatorArgs),
                },
                {
                    language: "typescript",
                    code: generateSourceCodeReactComponent(generatorArgs),
                },
            ],
            Vue: [
                {
                    language: "html",
                    code: generateSourceCodeVue(generatorArgs),
                },
            ],
        };
    }, [args, component]);

    return <SourceCode theme={theme} codeBlocks={codeBlocks} />;
};

export default FrameworkSource;
