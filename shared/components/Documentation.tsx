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
                    Facet allows product teams to rollout features without engaging engineering resources. In this step by step guide, we will showcase how to
                    install the facet-extension, create facets, inject the Facet CDN script and finally rollout/rollback desired features in production.
                </FacetParagraph>
                <br />
                <FacetH1 text="Download and install the facet-extension" id={documentationIds.download} />
                <FacetParagraph color={"#5D5D5D"}>
                    You can find the latest version of the facet-extension through <a href="http://cdn.facet.run/extension-chrome-facet-ninja.zip">this URL</a>. Once the zip is downloaded, unzip the folder and load it in the
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
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.preview}>Preview</h1>
                <FacetParagraph color={"#5D5D5D"} >
                    Preview allows you to see how your integration would work without having to integrate. By clicking on the "Save & Preview" button, you will
                    be able to see how the website would look like in production, without having to copy paste the snippet in your DOM.
                </FacetParagraph>
                <br />
                <br />
                <h1 style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }} id={documentationIds.oneLineCodeIntegration}>Live Integration</h1>
                <FacetParagraph color={"#5D5D5D"}  >
                    Once your configuration is ready, save your changes and your configuration will be applied into your application. Then copy paste the snippet of code into
                    your head html element.
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
