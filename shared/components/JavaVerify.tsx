import React, { useState } from 'react';
import { backendDocumentationIds } from '../constant';
import FacetH1 from './FacetH1';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';
import FacetLightboxImage from './FacetLightboxImage';

const YMLCode = () => {
    const facetYmlString = `workspaceId: WORKSPACE~ID
name: My-Application
environment: dev
apiKey: API_KEY
`
    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {facetYmlString}
        </SyntaxHighlighter>
    );
}

const JavaVerify = () => {

    const [open, setOpen] = useState(false);

    return <div>
        <FacetH1 id={backendDocumentationIds.verify}>Verify</FacetH1>
        Create a <i>facet.yml</i> file in your project directory. The file contains your <i>workspaceId</i>, your project's name and your environment.
        You can retrieve your workspaceId by login in into the dashboard.
        <YMLCode />
        Navigate into the <a href='https://app.facet.run' target='_blank'>dashboard</a>. Right after you login, select "Applications" -&gt; "My-Application". You should be able to see
        all the live methods and endpoints, alongside with a checkbox allowing their enablement and disablement.
        <div style={{ textAlign: 'center' }}>
            <FacetLightboxImage src='../../images/backend_dashboard.jpg' captionText='Managing facets in the dashboard' />
        </div>
        You should now be able to enable/disable methods and endpoints throughout the application.
    </div>
}

export default JavaVerify;