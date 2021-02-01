import { documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <FacetH1 id={documentationIds.preview}>Preview</FacetH1>
        <FacetParagraph color={"#5D5D5D"} >
            Click on <i>“Preview Page”</i> to evaluate your configuration without integrating into production. A new tab will open showing your preview. This feature allows you to review your configuration before you integrate with facet.
        </FacetParagraph>
    </>
}