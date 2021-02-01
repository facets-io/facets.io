import { documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <FacetH1 id={documentationIds.facetTitle}>Introduction</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>
            Facet allows product teams to rollout features without engaging engineering resources. In this guide, we describe how to install the facet extension, create facets, inject the facet CDN script, and rollout/rollback desired features in production.
            <br />
            <br />
            A facet is a group of elements that make up a feature. For instance, a login form could be considered a facet with the elements being “username” and “password”.
        </FacetParagraph>
        <br />
    </>
}