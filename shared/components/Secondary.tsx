import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";

const MainDiv = styled.div`
    width: 100%;
    text-align: center;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
`;

const BottomDiv = styled.div`
    display: grid, 
    justifyContent: center;
`;

const StyledFacetLabel = ({ text, fontSize = '36px' }) => <FacetLabel color={color.black} fontSize={fontSize} fontWeight={700} text={text} />

export default function Secondary() {
    return (
        <MainDiv>
            <br />
            <br />
            <br />
            <StyledFacetLabel text='Unrivaled Feature Management' />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <InnerDiv>
                <div>
                    <b>
                        <StyledFacetLabel fontSize='27px' text='Install' />
                    </b>
                </div>
            </InnerDiv>
            {/* <InnerDiv>
                <div>
                    <div>
                        <b>
                            <StyledFacetLabel fontSize='27px' text='Install' />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="A one-time installation of the facet extension allows your team to release features seamlessly. Using facets requires no setup or maintenance work." />
                    </div>
                </div>
                <div>
                </div>
            </InnerDiv>
            <br />
            <br />
            <br />
            <InnerDiv>
                <div style={{ textAlign: "center" }}>
                    <img style={{ boxShadow: `0px 0px 100px -40px ${color.black}` }} src="./declare_facet.svg" />
                </div>
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
                </div>
            </InnerDiv>
            <br />
            <br />
            <br />
            <InnerDiv>
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
                    <img style={{ top: "-5.3rem", position: "relative" }} src="./rocket.svg" />
                </BottomDiv>
            </InnerDiv> */}
        </MainDiv>
    );
}