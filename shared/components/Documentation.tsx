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

const preCodeValue = `
    <Head>
        <script src="https://api.facet.run/js?id={ID}"></script>
        <title>...</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
`;

export default () => {
    return (
        <StyledDiv>
            <div>
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.facetTitle}>Introduction</h1>
                <FacetParagraph color={"#5D5D5D"}>
                    Facet allows product teams to rollout features without engaging engineering resources. In this guide, we describe how to install the facet extension, create facets, inject the facet CDN script, and rollout/rollback desired features in production.
                    <br />
                    <br />
                    A facet is a group of elements that make up a feature. For instance, a login form could be considered a facet with the elements being “username” and “password”.
                </FacetParagraph>
                <br />
                <FacetH1 text="Download and install the facet-extension" id={documentationIds.download} />
                <FacetParagraph color={"#5D5D5D"}>
                    You can find the latest version of the facet-extension through <a href="http://cdn.facet.run/extension-chrome-facet-ninja.zip">this URL</a>. Unzip the folder and load it in the Chrome Web Store via the "Load unpacked" option. Click on “Manage Extensions” in the Chrome browser and enable “Developer mode“ on the top right corner. On the top left corner, select "Load unpacked"
                     {'->'} "Load the unzipped folder". The extension should then be loaded in your browser.
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <figure>
                            <img width='100%' src='../../images/download_extension.png' />
                            <figcaption>Installing facet-extension in Chrome</figcaption>
                        </figure>
                    </div>
                    <FacetBlockQuote>
                        We are actively working on publishing the extension through the Chrome Web Store. Once it is published, we will update the documentation accordingly.
                    </FacetBlockQuote>
                    <br />
                    After the installation, create and authenticate your user account. The facet extension is now ready for use.
                </FacetParagraph>
                <br />
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.addDomainToWorkspace}>Add Domain to Workspace</h1>
                <FacetParagraph color={"#5D5D5D"} >
                    In order facet-extension to run in the web page, click on the facet-extension popup and click on "Add Domain To Workspace".
                    Once the domain is added on your workspace, a sidebar with options will open on the left side, allowing you to CRUD facets across the page.
                </FacetParagraph>
                <div style={{ textAlign: 'center' }}>
                    <figure>
                        <img width='100%' src='../../add_to_workspace.png' />
                        <figcaption>Adding domain to the workspace</figcaption>
                    </figure>
                </div>
                <br />
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.facetDeclaration}>Declare facets</h1>
                <FacetParagraph color={"#5D5D5D"}>
                    Creating/Reading/Updating/Deleting (CRUD) facets is achieved by using the facet extension. To start using facets, log into the platform. Navigate to the application where you want to create facets, and click on the facet extension icon on the top right corner of your browser. Click on “Whitelist” to enable the extension on this domain.
                </FacetParagraph>
                <br />
                <br />
                <FacetParagraph color={"#5D5D5D"}>
                    The user interface of the facet extension is a sidebar that loads on the left. Start creating facets by clicking on the leftmost button on the top navigation bar of the extension. Click on the elements of interest to group them under your facet:
                    <br />
                    <br />
                    You can rename and delete a facet by clicking on [3 dots]. To create a new facet, click on the + [show it] button at the bottom right corner of the extension.
                </FacetParagraph>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <figure>
                        <img width='100%' src='../../images/facet_extension_in_action.png' />
                        <figcaption>Using the facet extension</figcaption>
                    </figure>
                </div>
                <br />
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
                <br />
                <br />
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.oneLineCodeIntegration}>Integration</h1>
                <FacetParagraph color={"#5D5D5D"}  >
                    Copy the snippet of code generated by the facet extension and displayed at the top of the extension. This will give you the single line of code that you need to paste into your head HTML code. The ID refers to the ID of your website. Once this line of code is integrated in your system, you should be able to see the configurations applied from the facet extension.
                    <pre><code>
                        {preCodeValue}
                    </code></pre>
                    Note that you would need to embed the script tag as early as your application loads, to ensure correct DOM dismissal before the elements are loaded on the page.
                </FacetParagraph>
                <br />
                <br />
                <FAQ />
                <br />
            </div>
        </StyledDiv >
    )
}
