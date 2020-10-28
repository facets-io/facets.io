import React from 'react';
import styled from 'styled-components';
import webstoreSrc from '../images/facet-ninja-web-store.png';
import authNinja from '../images/auth_facet-ninja.png';

const StyledImg = styled.img`
    margin-top: 1rem;
    width: ${props => props.width};
    text-align: 'center';
`

const StyledDiv = styled.div`
    text-align: start;
    color: white;
    background-color: #002740;
`;

const LRMarginDiv = styled.div`
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 5rem;
`;

const CenteredDiv = styled.div`
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
`;

const StyledBorder = styled.div`
    border-radius: .1rem;
    border: 2px solid white;
    padding: 1rem;
`;

const StyledIframe = styled.iframe`
    margin-top: 1rem;
`;



export default function () {
    return <StyledDiv>
        <LRMarginDiv>
            <CenteredDiv>
                <h1>Hello Reddit 😻 👋 !</h1>
                <h2> We are facet ninja and we are on a mission to streamline software delivery!</h2>
                <h3>❓ mmm 🤔 okay... but what do you do ❓ </h3>
                <h3>We do low-code rollouts (traditionally achieved via API/SDK feature flags) that power engineers and managers to ship feature faster!</h3>
                <h3>We got burnout by</h3>
                <h3>❓  And Why is this important ❓ </h3>
                <h3>We are devs ourselves and we have spent too much time on maintaining vendors and useless code that goes in and out manually with feature flags.
                We want to power engineers and devops to rollout continuously without any code, so devs like us can focus on the important stuff!</h3>
                <h2> Below you will find some information on how to get started with facet-extension. Should you have any question, please feel free to either contact through
                <a href='https://spectrum.chat/facet'> spectrum.chat </a> or open <a href='https://github.com/facets-io/facet-extension/issues'> a github issue</a>.</h2>
                <h2>
                    We are open-source and we welcome <a href='https://github.com/facets-io/facet-extension/blob/master/CONTRIBUTING.md'>contributions</a>!</h2>
                <h2>
                    <br /> THANK you again for checking us out 🙏 🚀 📦</h2>
            </CenteredDiv>
            <div>
                <h1>Videos & tutorials 📹:</h1>
                <br />
                <br />
                <CenteredDiv>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WARSSkFQHKg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />

                    <br />
                    <br />
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/K1UDhr1uJL0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </CenteredDiv>
            </div>
            <h2>How to use guide:</h2>
            <LRMarginDiv>
                1. Install the plugin via <a href='https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh'>Chrome Web Store</a>.
                <br />
                <CenteredDiv>
                    <a href='https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh'>
                        <StyledImg width='30%' src={webstoreSrc} alt='facet-ninja-web-store' />
                    </a>
                </CenteredDiv>
                <br />
                2. Login by clicking in the plugin icon.
                <CenteredDiv>
                    <StyledImg width='30%' src={authNinja} alt='facet-ninja-web-store' />
                </CenteredDiv>
                <br />
                3. Apply the preferred configuration through the facet-extension.
                <br />
                <br />
                <CenteredDiv>
                    <video width="420" height="240" autoplay="autoplay" controls muted loop>
                        <source src="https://video.facet.ninja/facetizer-hover.mov" />
                        Your browser does not support the video tag.
                    </video>
                </CenteredDiv>
                <br />
                <br />
                After you are done with your configuration, click on the "Save" button.
                <br />
                <br />
                4. Copy snippet and insert it in your pages HTML. The code should look something like this:
                <br />
                <br />
                <StyledBorder>
                    <code>
                        {'<script src="https://api.facet.ninja/facet.ninja.js?id={ID}"></script>'}
                    </code>
                </StyledBorder>
                <p>Click on "Copy Snippet" button to copy this snippet. "ID" will be auto-generated from our API.</p>
                <br />
                5. Paste the snippet to your application and see the results! 🚀
            </LRMarginDiv>
        </LRMarginDiv>
    </StyledDiv>
}