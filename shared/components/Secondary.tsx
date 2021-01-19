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
            <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Rapid Feature Management" />
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
                            <FacetLabel color={color.black} fontSize={fontSize.xLarge} text="Install" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="Facets are deliverable features. Use our extension to test, rollout and hide any elements  on your website. facet is a codeless solution that can be used by every member of your team. With facets, you can interface to any analytic platform of your choice." />
                    </div>
                </div>
                <div>
                    <img src="./single_line_of_code.svg"/>
                </div>
            </InnerDiv>
            <br />
            <br />
            <br />
            <InnerDiv>
                <div>
                    <img src="./product_screeenshot.svg"/>
                </div>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={fontSize.xLarge} text="Declare" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="Facets are a codeless solution for managing feature life cycle. With facets you can rollout unlimmited features without writing feature-specific code or needing system maintenance. facets are developer-minded and user friendly." />
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
                            <FacetLabel color={color.black} fontSize={fontSize.xLarge} text="Deploy" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="Facets are deliverable features. Use our extension to test, rollout and hide any elements  on your website. facet is a codeless solution that can be used by every member of your team. With facets, you can interface to any analytic platform of your choice." />
                    </div>
                </div>
                <div style={{display:"grid",justifyContent:"center"}}>
                    <img src="./rocket.svg"/>
                </div>
            </InnerDiv>
            <br />
            <br />
            <br />
            <br />
        </MainDiv>
    );
}