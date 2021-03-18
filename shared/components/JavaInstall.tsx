import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { backendDocumentationIds } from '../constant';
import FacetH1 from './FacetH1';

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

const JavaInstall = () => {
    return <div>
        <FacetH1 id={backendDocumentationIds.install}>Install</FacetH1>
        Facet captures data by using an SDK within your application’s runtime. Facet-agent can be found in the {' '}
        <a target='_blank' href='https://search.maven.org/artifact/run.facet.agent.java/facet-agent/0.0.1/jar'>sonatype distribution.</a>
        <CodeBlock />
    </div>
}

export default JavaInstall;