import { documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <FacetH1 id={documentationIds.facetDeclaration}>Declare facets</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>
            A facet is a group of elements that make up a feature. For instance, a login form can be a facet with the elements being “username” and “password”.
            <br />
            <br />
            Creating/Reading/Updating/Deleting (CRUDing) facets is achieved by using the facet extension. The user interface of the facet extension is a sidebar that loads on the left. Start creating facets by clicking on the edit icon ( ) on the top navigation bar of the extension. To declare a facet, hover your mouse over the webpage and select elements of interest by clicking on them. By clicking on the display/hide icon (EYE) next to each facet, you can toggle each facet.
            You can rename and delete a facet by clicking on ( THREE DOTS ) . To create a new facet, click on the + [TODO FAB ( ) ] button at the bottom right corner of the extension.
            <div style={{ textAlign: 'center' }}>
                <figure>
                    <img width='100%' src='../../images/facet_extension_in_action.png' />
                    <figcaption>Using the facet extension</figcaption>
                </figure>
            </div>
        </FacetParagraph>
    </>
}