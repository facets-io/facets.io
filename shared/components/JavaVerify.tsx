import React from 'react';
import { backendDocumentationIds } from '../constant';

const JavaVerify = () => {
    return <div id={backendDocumentationIds.verify}>
        Navigate into the <a href='https://facet.run'>dashboard</a>. Right after you login, select "Java". You should be able to see
        all the live methods and endpoints, alongside with a checkbox allowing their enablement and disablement.
        <div style={{ textAlign: 'center' }}>
            <figure>
                <img width='100%' src='../../images/backend_dashboard.png' />
                <figcaption><i>Managing facets in the dashboard</i></figcaption>
            </figure>
        </div>
        You should now be able to enable/disable methods and endpoints throughout the application.
    </div>
}

export default JavaVerify;