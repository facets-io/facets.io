import React from 'react';
import { backendDocumentationIds } from '../constant';
import FacetH1 from './FacetH1';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const YMLCode = () => {
    const facetYmlString = `workspaceId: WORKSPACE~ID
name: My-Application
environment: dev`
    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {facetYmlString}
        </SyntaxHighlighter>
    );
}

const JavaVerify = () => {
    return <div>
        <FacetH1 id={backendDocumentationIds.verify}>Verify</FacetH1>
        Create a <i>facet.yml</i> file in your project directory. The file contains your <i>workspaceId</i>, your project's name and your environment.
        You can retrieve your workspaceId by login in into the dashboard.
        <YMLCode />
        Navigate into the <a href='https://app.facet.run' target='_blank'>dashboard</a>. Right after you login, select "Applications" -&gt; "My-Application". You should be able to see
        all the live methods and endpoints, alongside with a checkbox allowing their enablement and disablement.
        <div style={{ textAlign: 'center' }}>
            <figure>
                <img width='100%' src='../../images/backend_dashboard.jpg' />
                <figcaption><i>Managing facets in the dashboard</i></figcaption>
            </figure>
        </div>
        You should now be able to enable/disable methods and endpoints throughout the application.
    </div>
}

export default JavaVerify;