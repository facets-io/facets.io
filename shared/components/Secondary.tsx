import styled from 'styled-components';
import { color, isMobile } from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";
import TitleParagraphImage from './TitleParagraphImage';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import useMedia from '../hooks/useMedia';

const CodeBlock = () => {
    const codeString = `java -javaagent:{AGENT_PATH}}/facet-agent-0.0.10.jar
#AGENT_PATH = the folder of the downloaded JAR
#https://search.maven.org/artifact/run.facet.agent.java/facet-agent`;
    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const MainDiv = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 2rem;
`;

const StyledImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: block;
    top: 0;
    width: 100%;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 85%;
        justify-content: center;
        top: -5.3rem;
        position: relative;
    }
`;

const MobileContainer = styled.div`
    display: grid;
    grid-template-columns: 85%;
    justify-content: center;
`;

const StyledFacetLabel = ({ text, fontSize = '36px', style = {}, isMobile = false }) =>
    isMobile ? <MobileContainer>
        <FacetLabel extraStyle={style} color={color.black} fontSize={fontSize} fontWeight={700} text={text} />
    </MobileContainer> :
        <FacetLabel extraStyle={style} color={color.black} fontSize={fontSize} fontWeight={700} text={text} />

const tpiElements = [
    {
        title: <div>
            <b>
                <StyledFacetLabel fontSize='27px' text='Install' />
            </b>
        </div>,
        paragraph: <div>
            <FacetParagraph>
                {/* @ts-ignore */}
                A one-time installation of the Facet agent allows your team to release features seamlessly. Using facet requires no setup or maintenance work.
                Start using our platform instantly by pasting the line of code generated through the dashboard.
            </FacetParagraph>
        </div>,
        image: <div>
            <CodeBlock />
        </div>
    },
    {
        title: <div style={{ textAlign: 'initial' }}>
            <b>
                <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700} text="Declare" />
            </b>
        </div>,
        paragraph: <div>
            <FacetParagraph >
                Facets are dynamic sets of elements making up features. Declare, name, and organize unlimited facets within seconds using the java-agent. Continually optimize the facet workspace according to your rollout schedule.
        </FacetParagraph>
        </div>,
        image: <div>
            <img style={{ boxShadow: `0px 0px 100px -40px ${color.black}`, width: '100%' }} src="./declare_facet.svg" />
        </div>
    },
    {
        title: <div>
            <b>
                <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700} text="Deploy" />
            </b>
        </div>,
        paragraph: <div>
            <FacetParagraph >
                Toggle endpoints with a single click. Our platform allows every member of your team to toggle features <b>without engaging developer resources</b>.
                This way, your team delivers software faster and saves on precious developers' time. Our platform gives your team ultimate control over your software delivery process.
        </FacetParagraph>
        </div>,
        image: <div>
            <StyledImg src="./rocket.svg" />
        </div>
    }
];

export default function Secondary() {

    const media = useMedia();
    const isViewMobile = isMobile(media);

    return (
        <MainDiv>
            <br />
            <br />
            <div>
                <StyledFacetLabel isMobile={isViewMobile} style={{ marginTop: '2rem' }} text='Unrivaled Endpoint Management' />
            </div>
            <br />
            <TitleParagraphImage element={tpiElements[0]} />
            <br />
            <br />
            <TitleParagraphImage isReverse element={tpiElements[1]} />
            <br />
            <br />
            <TitleParagraphImage element={tpiElements[2]} />
        </MainDiv>
    );
}