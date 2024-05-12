import React, { FC, useState } from "react";
import { Source } from "@storybook/blocks";
import { TabButton, Badge } from "@storybook/components";
import { styled } from "@storybook/theming";
import { SourceCodeBlockGroup, SourceCodeBlocks } from "./types";

interface SourceCodeProps {
    codeBlocks: SourceCodeBlocks;
    theme?: "dark" | "light";
}

const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 0 0 2rem;

    .docblock-source {
        margin: 0;
    }
`;

const Box = styled.div`
    display: block;
    position: relative;
`;

const Panel = styled(Box)`
    margin: 0;

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

const TabsContainer = styled(Box)`
    margin: 0;
`;

const TitleContainer = styled(Box)`
    margin: 0 0 1em;
`;

const BadgeContainer = styled(Box)`
    position: absolute;
    top: 4px;
    right: 6px;
    z-index: 1;
`;

/**
 * The `<SourceCode>` component can be used in MDX stories to group code snippets and provide a tab navigation to only show
 * code that is relevant for the user.
 *
 * For each `codeBlocks` entry a tab is added to the tab navigation.
 * The tabs are labelled with the key of the related entry.
 *
 * Set the `language` attribute on the code blocks to the language the code is written in.
 * The language is used for code formatting and to display an info badge.
 *
 * By default, code is displayed on a `dark` background.
 * Set `theme` to `light` if you prefer a light background for the code.
 */
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
        <Wrapper>
            <TabsContainer>
                {tabs.map(({ name, title }) => {
                    return (
                        <TabButton
                            key={name}
                            active={activeTab === name}
                            onClick={() => setActiveTab(name)}
                        >
                            {title}
                        </TabButton>
                    );
                })}
            </TabsContainer>
            {Array.isArray(activeGroup) &&
                activeGroup.map(({ code, language, title }) => (
                    <Panel key={`${activeTab}-${language}-${code}`}>
                        {title && <TitleContainer>{title}</TitleContainer>}
                        <Box>
                            <BadgeContainer>
                                <Badge status="neutral">{language}</Badge>
                            </BadgeContainer>
                            <Source
                                dark={theme === "dark"}
                                code={code}
                                // @ts-expect-error: FIXME
                                language={language}
                            />
                        </Box>
                    </Panel>
                ))}
            {!Array.isArray(activeGroup) && (
                <Panel>
                    <TitleContainer>
                        <p>No source available</p>
                    </TitleContainer>
                </Panel>
            )}
        </Wrapper>
    );
};

export default SourceCode;
