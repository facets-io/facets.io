import { documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <FacetH1 id={documentationIds.preview}>Preview</FacetH1>
        <FacetParagraph color={"#5D5D5D"} >
            By clicking on the display/hide icon next to each facet, you are able to rollout facets in production. Once your configuration is ready, save your changes and your configuration will be applied into your application.
            <br />
            <br />
            Preview the facets you have enabled by clicking on [preview]. A new tab opens, previewing your current configuration.
            <br />
            <br />
            Save or delete your configuration by using the <b>delete</b> or <b>save</b> buttons on the top navigation bar.
            </FacetParagraph>
    </>
}