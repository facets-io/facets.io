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
    const codeString = `workspaceId:    {WORKSPACE_ID}
name:           {APPLICAITON_NAME}
environment:    {ENVIRONMENT}
apiKey:         {API_KEY}`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const TroubleshootingJava = () => {
    return <div id={backendDocumentationIds.troubleshooting}>
        <FacetH1 >Troubleshooting</FacetH1>
        <ol>
            <li>
                If you encounter <i>javax.management.InstanceAlreadyExistsException</i> while running locally disable JMX integration in your IDE.
            </li>
        </ol>
    </div>
}

export default TroubleshootingJava;