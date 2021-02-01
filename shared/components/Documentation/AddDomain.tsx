import { documentationIds } from "../../constant"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.addDomainToWorkspace}>Add Domain to Workspace</h1>
        <FacetParagraph color={"#5D5D5D"} >
            In order facet extension to run in the web page, click on the facet extension popup and click on "Add Domain To Workspace".
            Once the domain is added on your workspace, a sidebar with options will open on the left side, allowing you to CRUD facets across the page.
                </FacetParagraph>
        <div style={{ textAlign: 'center' }}>
            <figure>
                <img width='100%' src='../../add_to_workspace.png' />
                <figcaption>Adding domain to the workspace</figcaption>
            </figure>
        </div>
    </>
}