import styled from 'styled-components';
import { color } from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";
import TitleParagraphImage from './TitleParagraphImage';

const MainDiv = styled.div`
    width: 100%;
    text-align: center;
`;

const BottomDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 100%;
`;

const StyledImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: block;
`;

const StyledFacetLabel = ({ text, fontSize = '36px', style = {} }) => <FacetLabel extraStyle={style} color={color.black} fontSize={fontSize} fontWeight={700} text={text} />

export default function Secondary() {
    return (
        <MainDiv>
            <StyledFacetLabel style={{ marginTop: '2rem' }} text='Unrivaled Feature Management' />
            <TitleParagraphImage>
                <div>
                    <b>
                        <StyledFacetLabel fontSize='27px' text='Install' />
                    </b>
                </div>
                <br />
                <div>
                    <FacetParagraph text="A one-time installation of the facet extension allows your team to release features seamlessly. Using facets requires no setup or maintenance work." />
                </div>
                <div>
                    //TODO
                </div>
                {/* <div>
                    <iframe src="https://carbon.now.sh/embed/ySE7xaQp2xii4cLsQ6mu" style={{ width: "656px", height: "310px", border: 0, transform: "scale(1.3)", overflow: "hidden" }} sandbox="allow-scripts allow-same-origin" />
                </div> */}
            </TitleParagraphImage>
            <TitleParagraphImage>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700} text="Declare" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph >
                            Facets are dynamic sets of elements making up features. Declare, name, and organize unlimmited facets within seconds using the facet extension. Continually optimize the facet workspace according to your rollout schedule.
                        </FacetParagraph>
                    </div>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <img style={{ boxShadow: `0px 0px 100px -40px ${color.black}` }} src="./declare_facet.svg" />
                    </div>
                </div>
            </TitleParagraphImage>
            <TitleParagraphImage>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700} text="Deploy" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph >
                            Deploy and roll back features instantly. The facet extension decouples feature management from developer resources, giving your team ultimate control over your software delivery process.
                        </FacetParagraph>
                    </div>
                </div>
                <BottomDiv>
                    <div>
                        <StyledImg src="./rocket.svg" />
                    </div>
                </BottomDiv>
            </TitleParagraphImage>
        </MainDiv>
    );
}