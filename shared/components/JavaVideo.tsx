import React from 'react';
import { backendDocumentationIds } from '../constant';
import StyledFacetLabel from './StyledFacetLabel';
import StyledVideo from './StyledVideo';

const JavaVideo = () => {
    return <div id={backendDocumentationIds.demo}>
        <br />
        <br />
        <br />
        <div>
            <StyledFacetLabel text="Demo" />
        </div>
        <br />
        <StyledVideo poster="../../video/video_placeholder.jpg" src="../../video/java.mp4" controls />
    </div>
}

export default JavaVideo;