import React from 'react';
import { backendDocumentationIds } from '../constant';
import FacetH1 from './FacetH1';
import FacetLightboxImage from './FacetLightboxImage';
import FacetParagraph from './FacetParagraph';

const JavaSettings = () => {
    return <div>
        <FacetH1 id={backendDocumentationIds.settings}>Settings</FacetH1>
        <FacetParagraph>
            Manage which packages are visible to the dashboard by going to "Settings" {'->'} "Block List" and add the package name to be blocked.
            For instance, ignoring <i>com.sun</i> package.
        </FacetParagraph>
        <div style={{ textAlign: 'center' }}>
            <FacetLightboxImage src='../../images/blocklist_settings.jpg' captionText='Updating block list' />
        </div>
        <FacetParagraph>
            Note that adding packages requires passing <i>"/" </i> as a delimiter. For instance, for adding <i>com.sun</i> would be defined as <i>com/sun</i>.
        </FacetParagraph>
    </div>
}

export default JavaSettings;