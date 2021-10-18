import React, { FC, useState } from "react";
import { TabButton, Source, Badge } from "@storybook/components";
import { SourceCodeBlockGroup, SourceCodeBlocks } from "./types";

interface SourceCodeProps {
    codeBlocks: SourceCodeBlocks;
    theme?: "dark" | "light";
}

export const SourceCode: FC<SourceCodeProps> = ({
    codeBlocks,
    theme = "dark",
}: SourceCodeProps) => {
    const tabs: SourceCodeBlockGroup[] = Object.keys(codeBlocks).map((key) => {
        return {
            name: key,
            title: key,
            ...codeBlocks[key],
        };
    });
    const [activeTab, setActiveTab] = useState<string>(tabs[0]?.name || "");
    const activeGroup = codeBlocks[activeTab];
    return (
        <div className="SourceCode">
            <div className="SourceCode__header">
                {tabs.map(({ name, title }) => (
                    <TabButton
                        key={name}
                        active={activeTab === name}
                        onClick={() => setActiveTab(name)}
                    >
                        {title}
                    </TabButton>
                ))}
            </div>
            {Array.isArray(activeGroup) &&
                activeGroup.map(({ code, language, title }) => (
                    <div
                        key={`${activeTab}-${language}-${code}`}
                        className="SourceCode__panel"
                    >
                        {title && (
                            <div className="SourceCode__block-title">
                                {title}
                            </div>
                        )}
                        <div className="SourceCode__block">
                            <div className="SourceCode__block-badge">
                                <Badge status="neutral">{language}</Badge>
                            </div>
                            <Source
                                dark={theme === "dark"}
                                code={code}
                                language={language}
                            />
                        </div>
                    </div>
                ))}
            {!Array.isArray(activeGroup) && (
                <div className="SourceCode__panel">
                    <div className="SourceCode__block-title">
                        <p>No source available</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SourceCode;
