import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = () => {
    const codeString = `<dependency>
    <groupId>run.facet.agent.java</groupId>
    <artifactId>facet-agent</artifactId>
</dependency>`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};
const JavaDownload = () => {
    return <>
        The facet agent jar can be downloaded from <a href='https://search.maven.org/artifact/run.facet.agent.java/facet-agent' target='_blank'>maven central</a>.
        <br />
        <CodeBlock />
    </>
}

export default JavaDownload;