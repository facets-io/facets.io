import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { backendDocumentationIds } from '../constant';
import FacetH1 from './FacetH1';

const JavaCode = () => {
    const codeString = `java -javaagent:/full/path/to/facet.jar -jar /full/path/to/application`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const FacetYML = () => {
    const codeString = `workspaceId: {WORKSPACE_ID}
name: {APPLICAITON_NAME}
environment: {ENVIRONMENT}
apiKey: {API_KEY}`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const JavaInstall = () => {
    return <>
        <FacetH1 id={backendDocumentationIds.install}>Install</FacetH1>
        <ol>
            <li>
                Configure your JVM to load the agent during your application's premain start-up by passing the <i>-javaagent:/full/path/to/facet.jar </i> command-line argument.
                <JavaCode />
            </li>
            <li>
                Create a <i>facet.yml</i> file located in the same directory as the <i>facet-agent.jar</i> from step 1.
                <FacetYML />
            </li>
            <br />
            <b>workspaceId</b> is retrieved from the <a href='https://app.facet.run/' target='_blank'>dashboard</a>. <br />
            <b>apiKey</b> is retrieved from the <a href='https://app.facet.run/' target='_blank'>dashboard</a>. <br />
            <b>name</b> is the name of your application.<br />
            <b>environment</b> is the environment of your application deployment.
        </ol>
    </>
}

export default JavaInstall;