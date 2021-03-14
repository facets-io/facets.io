
import { backendDocumentationIds } from "../constant"
import FacetParagraph from "./FacetParagraph"

const JavaIntro = () => {
    return <div id={backendDocumentationIds.introduction}>
        <FacetParagraph>
            The Facet Java SDK can be used with Kotlin, Scala, and other JVM languages. Code examples are typically provided in both Java and Kotlin.
            On this page, we get you up and running with Facet's SDK, so that it will automatically switch methods and endpoints to enable/disable.
        </FacetParagraph>
    </div>
}

export default JavaIntro;