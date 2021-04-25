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
    const codeString = `apiKey: API_KEY
workspaceId: WORKSPACE_ID
name: APPLICATION_NAME
environment: ENVIRONMENT`;

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
                Move the Facet java-agent JAR in the root of the application folder, or in a subfolder in your project.
            </li>
            <li>
                Configure your JVM to load the agent during your application's premain start-up by passing this command-line argument: <i>-javaagent:/facet-agent-VERSION.jar</i>. Replace <i>facet-ageent-VERSION.jar</i> with the absolute path of the Facet java-agent JAR. For IDEA users, this usually can be found at "Edit Configuration" {'->'} "VM options".
            </li>
            <li>
                Create a <i>facet.yml</i> file located in the same directory as the facet-agent.jar from step 1.
                <FacetYML />
            </li>
            <li>
                Login and grab your credentials (workspaceId and apiKey) from the Facet Dashboard at <a href="https://app.facet.run">https://app.facet.run</a>.
            </li>

            <br />
            <b>apiKey</b> Used for Facet API authentication.<br />
            <b>workspaceId</b> The ID of the workspace.<br />
            <b>name</b> The name of your application.<br />
            <b>environment</b> The environment of your application deployment. For instance, you may use local for your local environment.
            <br /><br />
            After you start your application, you will be able to preview the project listed in the Facet Dashboard, under "Applications".
        </ol>
    </>
}

export default JavaInstall;