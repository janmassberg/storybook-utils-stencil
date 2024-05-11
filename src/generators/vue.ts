import {
    ArgsType,
    filterHtmlAttributes,
    filterEventHandlers,
    filterJsxProperties,
    formatHtml,
    formatJsx,
    objectToString,
    toKebabCase,
    toLowerCamelCase,
    ucFirst,
} from "../utils";

const transformVueAttributes = (attributes: ArgsType) => {
    return attributes.map(([key, value]) => {
        return `${toKebabCase(key)}="${value}"`;
    });
};

export const generateSourceCodeVue = (component: string, args: any) => {
    const attribs = filterHtmlAttributes(args);
    const props = filterJsxProperties(args);
    const events = filterEventHandlers(args);
    const slot = args._children || "";

    const vueComponentName = toKebabCase(component);
    const vueAttributes = transformVueAttributes(attribs);
    const vueProps = props.map(
        ([key]) => `.${toLowerCamelCase(key)}="${toLowerCamelCase(key)}"\n`
    );
    const vueEvents = events.map(([key]) => `@${key}="on${ucFirst(key)}"\n`);
    const vueComponentJsx = `<${vueComponentName}
        ${vueAttributes.join("\n")}
        ${vueProps.join("\n")}
        ${vueEvents.join("\n")}
        >${slot}</${vueComponentName}>`;

    const vueEventHandlers = events.map(
        ([key, value]) =>
            `on${ucFirst(key)}: ${value.toString().replace(/\n/g, "\n")}`
    );

    const vueConstants = props.map(([key, value]) => {
        return `${toLowerCamelCase(key)}: ${objectToString(value).replace(
            /\n/g,
            "\n"
        )}`;
    });

    const vueComponentData =
        vueConstants.length < 1
            ? ""
            : `
  data() {
    return {
      ${vueConstants.join(",\n")}
    };
  },`;

    const vueComponentMethods =
        vueEventHandlers.length < 1
            ? ""
            : `
  methods: {
    ${vueEventHandlers.join(",\n")}
  },`;

    const vueComponentScriptSrc = `
export default {
${vueComponentData.replace(/^\n(.*)/, "$1")}
${vueComponentMethods.replace(/^\n(.*)/, "$1")}
};
`;

    const vueComponentSource = `
<template>
  ${vueComponentJsx}
</template>

<script lang="ts">
${formatJsx(vueComponentScriptSrc.replace(/^\n/, ""))}
</script>
`;
    // return vueComponentSource;
    return formatHtml(vueComponentSource);
};
