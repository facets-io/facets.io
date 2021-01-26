import styled from 'styled-components';
import {color, color as colorConstant, documentationIds, fontSize} from '../constant';
import FAQ from './FAQ';
import FacetLabel from "./FacetLabel";
import FacetParagraph from "./FacetParagraph";

const StyledDiv = styled.div`
    color: ${color.black};
    font-family: Manrope;
    font-weight: 400;
`;

const FacetCode = styled.div`
    text-align: center;
`;


export default function Documentation() {
    return (
        <StyledDiv>
            <div>
            <h1 style={{fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600}} id={documentationIds.facetTitle}>Facet</h1>
            <FacetParagraph color={"#5D5D5D"} text="The quickest way to rollout features without engaging engineering resources. Facet enables product teams to rollout features without having to declare in-code logic." />
            <br/>
                <br/>
            <h1 style={{fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600}}  id={documentationIds.oneLineCodeIntegration}>Integration</h1>
                <p>
                    <FacetParagraph color={"#5D5D5D"}text="Last but not least, copy the snippet of code generated from the facet-extension. This will give you the single line that you need to paste into your head HTML code.  The ID refers to the ID of your website. Once this line of code is integrated in your system, you should be able to see the configurations applied from the facet extension." />"
                    <br/>
                    <br/>
                    <br/>
                    <FacetCode><FacetLabel text='<script src="https://api.facet.ninja/facet.ninja.js?id={ID}"></script>' padding=".5rem" paddingTop=".25rem" paddingBottom=".25rem" fontFamily="Manrope" fontWeight={500} fontSize={"16px"} backgroundColor={color.primary} color={color.white} border={`2px solid ${color.primary}`} borderRadius={".5rem"}/></FacetCode>
                    <br/>
                    <br/>

                </p>
                <br />
                <br/>
            <h1 style={{fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600}}  id={documentationIds.facetDeclaration}>Declare a facet</h1>

                <FacetParagraph color={"#5D5D5D"} text="A facet is a set elements that construe a feature. For instance, a login form could be considered a facet, with the elements being username and password."/>
                <br />
                <br />
                <FacetParagraph color={"#5D5D5D"} text="Creating/Reading/Updating/Deleting (CRUD) facets is achieved by using the facet chrome extension. After you install the extension from the Chrome Web Store, you can login into the platform.  Navigate to the application where you want to create facets, and enable the plugin through the popup." />.
                <br />
                <br />
                <FacetParagraph color={"#5D5D5D"} text="A sidebar will be loaded on the left side, which will offer the ability of CRUD-ing facets. The facet-extension can be enabled through the very first button on the top navigation bar.  Declaring a facet is as easy as clicking on the element of interest, as shown below:" />
                <br/>
                <br/>
                <h1 style={{fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600}}  id={documentationIds.holdOffRollOut}>Rollout</h1>
                <FacetParagraph color={"#5D5D5D"} text="By clicking on the display/hide icon next to each facet, you are able to rollout facets in production. Once your configuration is ready, save your changes and your configuration will be applied into your application." />
                <br/>
                <br/>
                <FAQ />
            <br />
            </div>
        </StyledDiv>
    )
}
