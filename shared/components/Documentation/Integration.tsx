import {color, documentationIds, fontSize} from "../../constant";
import FacetH1 from "../FacetH1";
import FacetLabel from "../FacetLabel";
import FacetParagraph from "../FacetParagraph"
import styled from "styled-components";

const CodeDiv = styled.div`
    text-align: center;
    overflow: hidden;
`;

export default () => {
    return <>
        <FacetH1 id={documentationIds.oneLineCodeIntegration}>Integration</FacetH1>
        <FacetParagraph color={"#5D5D5D"}  >
            Copy the snippet of code generated by the facet extension and displayed at the top of the extension (show img here..).
            This is the single line of code you need to paste into your <i>head HTML</i> code. Once this line of code is integrated in your system, you will be able to use facets in production.
            <CodeDiv>
                <iframe src="https://carbon.now.sh/embed/ySE7xaQp2xii4cLsQ6mu"  style={{width: "656px", height: "250px", border: 0,  transform: "scale(1)", overflow: "hidden"}} sandbox="allow-scripts allow-same-origin" />
                <br />
                <i>
                    <FacetLabel fontSize={fontSize.small} text="Note: ID is automatically generated from the facet extension" />
                </i>
            </CodeDiv>
            <br/>
            <br/>
            Make sure to embed the script tag as early as your application loads, to ensure correct DOM dismissal before the elements are loaded on the page.
    </FacetParagraph>
    </>
}