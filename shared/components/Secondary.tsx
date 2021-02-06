import styled from 'styled-components';
import { color } from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";
import TitleParagraphImage from './TitleParagraphImage';

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

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 85%;
        justify-content: center;
        top: -5.3rem;
        position: relative;
    }
`;

const StyledFacetLabel = ({ text, fontSize = '36px', style = {} }) => <FacetLabel extraStyle={style} color={color.black} fontSize={fontSize} fontWeight={700} text={text} />
const tpiElements = [
    {
        title: <div>
            <b>
                <StyledFacetLabel fontSize='27px' text='Install' />
            </b>
        </div>,
        paragraph: <div>
            <FacetParagraph text="A one-time installation of the facet extension allows your team to release features seamlessly. Using facets requires no setup or maintenance work." />
        </div>,
        image: <div>
            <iframe scrolling="no" src="https://carbon.now.sh/embed/ySE7xaQp2xii4cLsQ6mu" style={{ width: "456px", height: "310px", border: 0, transform: "scale(1.3)", overflow: "hidden" }} sandbox="allow-scripts allow-same-origin" />
        </div>
    },
    {
        title: <div>
            <b>
                <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700} text="Declare" />
            </b>
        </div>,
        paragraph: <div>
            <FacetParagraph >
                Facets are dynamic sets of elements making up features. Declare, name, and organize unlimmited facets within seconds using the facet extension. Continually optimize the facet workspace according to your rollout schedule.
        </FacetParagraph>
        </div>,
        image: <div style={{ textAlign: "center" }}>
            <img style={{ boxShadow: `0px 0px 100px -40px ${color.black}` }} src="./declare_facet.svg" />
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
                Deploy and roll back features instantly. The facet extension decouples feature management from developer resources, giving your team ultimate control over your software delivery process.
        </FacetParagraph>
        </div>,
        image: <div>
            <StyledImg src="./rocket.svg" />
        </div>
    }

]
export default function Secondary() {
    return (
        <MainDiv>
            <br />
            <br />
            <StyledFacetLabel style={{ marginTop: '2rem' }} text='Unrivaled Feature Management' />
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