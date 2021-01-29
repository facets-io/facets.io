import styled from 'styled-components';
import { color, color as colorConstant, documentationIds, fontSize } from '../constant';
import FAQ from './FAQ';
import FacetLabel from "./FacetLabel";
import FacetParagraph from "./FacetParagraph";
import FacetH1 from './FacetH1';
import FacetBlockQuote from './FacetBlockQuote';

const StyledDiv = styled.div`
    color: ${color.black};
    font-family: Manrope;
    font-weight: 400;
`;

const FacetCode = styled.div`
    text-align: center;
`;

export default () => {
    return (
        <StyledDiv>
            <div>
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.facetTitle}>Introduction</h1>
                <FacetParagraph color={"#5D5D5D"}>
                    Facet allows product teams to rollout features without engaging engineering resources. In this step by step guide, we will showcase how to
                    install the facet-extension, create facets, inject the Facet CDN script and finally rollout/rollback desired features in production.
                </FacetParagraph>
                <br />
                <FacetH1 text="Download and install the facet-extension" id={documentationIds.download} />
                <FacetParagraph color={"#5D5D5D"}>
                    You can find the latest version of the facet-extension through <a href="http://cdn.facet.ninja/extension-chrome-facet-ninja.zip">this URL</a>. Once the zip is downloaded, unzip the folder and load it in the
                    Chrome Web store via the "Load unpacked" option. "Manage Extensions" {'->'} "Load unpacked" {'->'} "Load the unzipped folder". The extension should then be loaded in your browser.
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <figure>
                            <img width='100%' src='../../images/download_extension.png' />
                            <figcaption>Installing facet-extension in Chrome</figcaption>
                        </figure>
                    </div>
                    <FacetBlockQuote>
                        We are actively working on publishing the extension through the chrome web store, and once we do, we will update the docs accordingly.
                    </FacetBlockQuote>
                </FacetParagraph>
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.facetDeclaration}>Declare facets</h1>

                <FacetParagraph color={"#5D5D5D"} text="A facet is a set elements that construe a feature. For instance, a login form could be considered a facet, with the elements being username and password." />
                <br />
                <br />
                <FacetParagraph color={"#5D5D5D"} text="Creating/Reading/Updating/Deleting (CRUD) facets is achieved by using the facet chrome extension. After you install the extension from the Chrome Web Store, you can login into the platform.  Navigate to the application where you want to create facets, and enable the plugin through the popup." />.
                <br />
                <br />
                <FacetParagraph color={"#5D5D5D"} text="A sidebar will be loaded on the left side, which will offer the ability of CRUD-ing facets. The facet-extension can be enabled through the very first button on the top navigation bar.  Declaring a facet is as easy as clicking on the element of interest, as shown below:" />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <figure>
                        <img width='100%' src='../../images/facet_extension_in_action.png' />
                        <figcaption>Using the facet extension</figcaption>
                    </figure>
                </div>
                <br />
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.oneLineCodeIntegration}>Integration</h1>
                <p>
                    <FacetParagraph color={"#5D5D5D"} text="Last but not least, copy the snippet of code generated from the facet-extension. This will give you the single line that you need to paste into your head HTML code.  The ID refers to the ID of your website. Once this line of code is integrated in your system, you should be able to see the configurations applied from the facet extension." />"
                    <br />
                    <br />
                    <FacetCode><FacetLabel text='<script src="https://api.facet.ninja/facet.ninja.js?id={ID}"></script>' padding=".5rem" paddingTop=".25rem" paddingBottom=".25rem" fontFamily="Manrope" fontWeight={500} fontSize={"16px"} backgroundColor={color.primary} color={color.white} border={`2px solid ${color.primary}`} borderRadius={".5rem"} /></FacetCode>
                    <br />
                    <br />

                </p>
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.holdOffRollOut}>Rollout</h1>
                <FacetParagraph color={"#5D5D5D"} text="By clicking on the display/hide icon next to each facet, you are able to rollout facets in production. Once your configuration is ready, save your changes and your configuration will be applied into your application." />
                <br />
                <br />
                <FAQ />
                <br />
            </div>
        </StyledDiv >
    )
}
