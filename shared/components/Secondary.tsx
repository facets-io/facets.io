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
            <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Unrivaled Feature Management" />
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
                        <FacetParagraph text="Install the facet extension in under a minute and help your team release features seamlessly. Our platform does not require any setup or maintenance work. A single line of code allows your team to manage unlimited features." />
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
                    <img src="./declare.svg"/>
                </div>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={fontSize.xLarge} text="Declare" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetParagraph text="Facets are made up by dynamic groups of elements that you define. Declare, name, and organize unlimmited facets within a few seconds. Optimize the features in the facet workspace according to your workflow requirements." />
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
                        <FacetParagraph text="Deploy or roll back features instantly and without code. The facet extention makes it simple to roll out features, freeing up developer resources." />
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