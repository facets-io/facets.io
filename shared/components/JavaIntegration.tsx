import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = () => {
    const codeString = `<dependency>
    <groupId>run.facet</groupId>
    <artifactId>facet</artifactId>
    <version>0.0.1</version>
</dependency>`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const JavaIntegration = () => {
    return <>
        Facet captures data by using an SDK within your application’s runtime.
        <CodeBlock />
    </>
}

export default JavaIntegration;