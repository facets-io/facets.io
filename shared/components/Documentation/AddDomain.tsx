import { documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <FacetH1 id={documentationIds.addDomainToWorkspace}>Add Domain to Workspace</FacetH1>
        <FacetParagraph color={"#5D5D5D"} >
            Navigate to the webpage where you want to create facets and click on the facet extension icon on the top right corner of your browser.
            Click on “Add Domain To Workspace” to enable the extension on this domain. The facet extension will remain enabled for every domain you add to your workspace. To enable or disable the extension on an added workspace or to remove it from the workspace, click on the facet extension icon on the top right corner of your browser.
        </FacetParagraph>
        <div style={{ textAlign: 'center' }}>
            <figure>
                <img width='100%' src='../../add_to_workspace.png' />
                <figcaption>Adding domain to the workspace</figcaption>
            </figure>
        </div>
    </>
}