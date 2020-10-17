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
`;

const CenteredDiv = styled.div`
    text-align: center;
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
            <h1>How to use guide:</h1>
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
                <br/>
                <br />
                After you are done with your configuration, click on the "Save" button.
                <br/>
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
            <h1>Some more videos 📹</h1>
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
        </LRMarginDiv>
    </StyledDiv>
}