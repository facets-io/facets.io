import styled  from 'styled-components';
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

export default function Secondary() {
    return (
        <MainDiv>
            <br />
            <br />
            <br />
            <FacetLabel color={color.black} fontSize={"36px"} fontWeight={700} text="Unrivaled Feature Management" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <InnerDiv>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700} text="Install" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="A one-time installation of the facet extension allows your team to release features seamlessly. Using facets requires no setup or maintenance work." />
                    </div>
                </div>
                <div>
                    <iframe src="https://carbon.now.sh/embed/ySE7xaQp2xii4cLsQ6mu"  style={{width: "656px", height: "310px", border: 0,  transform: "scale(1.3)", overflow: "hidden"}} sandbox="allow-scripts allow-same-origin" />
                </div>
            </InnerDiv>
            <br />
            <br />
            <br />
            <InnerDiv>
                <div style={{textAlign: "center"}}>
                    <img style={{boxShadow: `0px 0px 100px -40px ${color.black}`}} src="./declare_facet.svg"/>
                </div>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700}  text="Declare" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="Facets are dynamic sets of elements making up features. Declare, name, and organize unlimmited facets within seconds using the facet extension. Continually optimize the facet workspace according to your rollout schedule." />
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
                            <FacetLabel color={color.black} fontSize={"27px"} fontWeight={700}  text="Deploy" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="Deploy and roll back features instantly. The facet extension decouples feature management from developer resources, giving your team ultimate control over your software delivery process." />
                    </div>
                </div>
                <div style={{display:"grid",justifyContent:"center"}}>
                    <img style={{top:"-5.3rem", position: "relative"}} src="./rocket.svg"/>
                </div>
            </InnerDiv>
        </MainDiv>
    );
}