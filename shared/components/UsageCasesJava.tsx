import React from 'react';
import { backendDocumentationIds } from '../constant';
import FacetH1 from './FacetH1';

const UsageCasesJava = () => {
    return <>
        <FacetH1 id={backendDocumentationIds.usageCases}>Usecases</FacetH1>
        We are in the early stages of product development and can envision several use cases for this type of solution.
        <ol>
            <li>
                Endpoint management - disable or reroute endpoints on the fly for beta features or when application and performance issues arise.
            </li>
            <li>
                Chaos engineering - automated chaos engineering testing framework.
            </li>
            <li>
                Logging toggles - increase and decrease logging or add and remove log statements dynamically without deployment and restarting applications.
            </li>
            <li>
                Automatic documentation generation, as well as endpoint detection.
            </li>
            <li>
                Low code feature flags - low code alternative to traditional feature flag toggles.
            </li>
        </ol>
        We would love to hear your feedback!
        <br />
        <FacetH1>Feedback and Support</FacetH1>

        Open a <a href='https://github.com/facet-tech/agent-java/issues' target="_blank">GitHub issue</a> or send an email at <b>engineering@facet.run</b>.
    </>
}

export default UsageCasesJava;