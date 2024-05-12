import React, { FC, useMemo } from "react";
import { SourceCode, SourceCodeBlocks } from "../SourceCode";
import {
    CodeGeneratorArgs,
    generateSourceAngularComponent,
    generateSourceAngularHtml,
    generateSourceHtmlMarkup,
    generateSourceHtmlScript,
    generateSourceReactJsx,
    generateSourceReactFC,
    generateSourceVueComponent,
} from "../../generators";

export interface FrameworkSourceProps {
    component: string;
    args: Record<string, unknown>;
    theme: "dark" | "light";
}

/**
 * The `<FrameworkSource>` component can be used in MDX stories to display integration source for all supported frameworks
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
                    code: generateSourceHtmlMarkup(generatorArgs),
                },
                {
                    language: "html",
                    code: generateSourceHtmlScript(generatorArgs),
                },
            ],
            Angular: [
                {
                    language: "html",
                    code: generateSourceAngularHtml(generatorArgs),
                },
                {
                    language: "typescript",
                    code: generateSourceAngularComponent(generatorArgs),
                },
            ],
            React: [
                {
                    language: "jsx",
                    code: generateSourceReactJsx(generatorArgs),
                },
                {
                    language: "typescript",
                    code: generateSourceReactFC(generatorArgs),
                },
            ],
            Vue: [
                {
                    language: "html",
                    code: generateSourceVueComponent(generatorArgs),
                },
            ],
        };
    }, [args, component]);

    return <SourceCode theme={theme} codeBlocks={codeBlocks} />;
};

export default FrameworkSource;
