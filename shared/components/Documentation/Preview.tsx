import { documentationIds } from "../../constant"
import FacetParagraph from "../FacetParagraph"

export default () => {
    return <>
        <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.preview}>Preview</h1>
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