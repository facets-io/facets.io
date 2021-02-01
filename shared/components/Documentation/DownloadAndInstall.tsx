import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"
import { documentationIds } from "../../constant"

export default () => {
    return <>
        <FacetH1 id={documentationIds.download}>Download and install the facet extension</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>
            Download the latest version of the facet extension <a href="http://cdn.facet.run/extension-chrome-facet-ninja.zip">here</a>. Unzip the folder and load it in the Chrome Web Store via the “Load unpacked” option. Click on “Manage Extensions” in the Chrome browser and enable “Developer mode” on the top right corner. On the top left corner, select “Load unpacked” {'->'} “Load the unzipped folder” and open the unzipped facet extension folder. The extension should be installed in your browser.
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <figure>
                    <img width='100%' src='../../images/download_extension.png' />
                    <figcaption>Installing facet extension in Chrome</figcaption>
                </figure>
            </div>
                We are actively working on publishing the extension through the Chrome Web Store. Once it is published, we will update the documentation accordingly.
            <br />
                After the installation, create and authenticate your user account. The facet extension is now ready for use.
            </FacetParagraph>
    </>
}