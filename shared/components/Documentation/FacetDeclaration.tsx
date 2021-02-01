import { documentationIds } from "../../constant"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.facetDeclaration}>Declare facets</h1>
        <FacetParagraph color={"#5D5D5D"}>
            Creating/Reading/Updating/Deleting (CRUD) facets is achieved by using the facet extension. To start using facets, log into the platform. Navigate to the application where you want to create facets, and click on the facet extension icon on the top right corner of your browser. Click on “Whitelist” to enable the extension on this domain.
        </FacetParagraph>
        <br />
        <br />
        <FacetParagraph color={"#5D5D5D"}>
            The user interface of the facet extension is a sidebar that loads on the left. Start creating facets by clicking on the leftmost button on the top navigation bar of the extension. Click on the elements of interest to group them under your facet:
            <br />
            <br />
            You can rename and delete a facet by clicking on [3 dots]. To create a new facet, click on the + [show it] button at the bottom right corner of the extension.
            <br />
            <div style={{ textAlign: 'center' }}>
                <figure>
                    <img width='100%' src='../../images/facet_extension_in_action.png' />
                    <figcaption>Using the facet extension</figcaption>
                </figure>
            </div>
        </FacetParagraph>
    </>
}