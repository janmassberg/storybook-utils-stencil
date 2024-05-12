import React, { FC, useMemo } from "react";
import { SourceCode, SourceCodeBlocks } from "../SourceCode";
import {
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
    props: Record<string, any>;
    theme: "dark" | "light";
}

/**
 * The `<FrameworkSource>` component can be used in a MDX story to display integration source for all supported frameworks
 * (HTML, Angular, React and Vue) in separate tabs.
 */
export const FrameworkSource: FC<FrameworkSourceProps> = ({
    component,
    props,
    theme,
}: FrameworkSourceProps) => {
    const codeBlocks = useMemo<SourceCodeBlocks>(() => {
        return {
            HTML: [
                {
                    language: "html",
                    code: generateSourceCodeHtml(component, props),
                },
                {
                    language: "html",
                    code: generateSourceCodeJavascript(component, props),
                },
            ],
            Angular: [
                {
                    language: "html",
                    code: generateSourceCodeAngularHtml(component, props),
                },
                {
                    language: "typescript",
                    code: generateSourceCodeAngularComponent(component, props),
                },
            ],
            React: [
                {
                    language: "jsx",
                    code: generateSourceCodeReact(component, props),
                },
                {
                    language: "typescript",
                    code: generateSourceCodeReactComponent(component, props),
                },
            ],
            Vue: [
                {
                    language: "html",
                    code: generateSourceCodeVue(component, props),
                },
            ],
        };
    }, [props, component]);

    return <SourceCode theme={theme} codeBlocks={codeBlocks} />;
};

export default FrameworkSource;
