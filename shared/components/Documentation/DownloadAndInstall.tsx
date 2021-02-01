import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"
import { documentationIds } from "../../constant"
import FacetBlockQuote from '../FacetBlockQuote';

export default () => {
    return <>
        <FacetH1 id={documentationIds.download}>Download and install the facet extension</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>

            Download the latest version of the facet extension <a href="http://cdn.facet.run/extension-chrome-facet-ninja.zip">here</a>. Unzip the folder and load it as an extension in your chrome browser via the
            <b>"Load unpacked"</b> option. 
            <br/>
            <br/>
            Click on <b>“Manage Extensions”</b> in the Chrome browser and enable <b>“Developer mode“in</b> the top right corner. In the top left corner, select <b>"Load unpacked"</b> {'->'} <b>"Load the unzipped folder"</b> and open the unzipped facet extension folder. The extension should be installed in your browser.
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <figure>
                    <img width='100%' src='../../images/download_extension.png' />
                    <figcaption>Installing facet extension in Chrome</figcaption>
                </figure>
            </div>
            <FacetBlockQuote>
                We are actively working on publishing the extension through the Chrome Web Store. Once it is published, we will update the documentation accordingly.
            </FacetBlockQuote>
            <br />
            After the installation, create and authenticate your user account. The facet extension is now ready for use.
            </FacetParagraph>
    </>
}