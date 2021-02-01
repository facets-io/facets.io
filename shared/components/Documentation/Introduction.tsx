import { documentationIds } from "../../constant"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.facetTitle}>Introduction</h1>
        <FacetParagraph color={"#5D5D5D"}>
            Facet allows product teams to rollout features without engaging engineering resources. In this guide, we describe how to install the facet extension, create facets, inject the facet CDN script, and rollout/rollback desired features in production.
            <br />
            <br />
            A facet is a group of elements that make up a feature. For instance, a login form could be considered a facet with the elements being “username” and “password”.
        </FacetParagraph>
        <br />
    </>
}