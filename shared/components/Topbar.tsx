import FacetButton, {primaryBtnColor} from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import {color, fontSize} from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";

const MainDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
`;


const Checkmark = styled.div`
    display: grid;
    grid-template-columns: 10% 95%;
    justify-content: center;
    align-items: center;
`;


const BulletPoints = styled.div`
    display: grid;
    grid-template-columns: 40% 50%;
    grid-template-rolws: 40% 50%
    justify-content: center;
    align-items: center;
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 20% 10%;
    text-align: left;
    justify-content: left
`;

const StyledImage = styled.img`
    height: 1rem;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <div style={{justifyContent: "left"}}>
                <center><FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Make Feature Management Great Again"/><br /><br />
                <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Pinson Kotsollaris"/> <br /> <br />
                    <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="2024"/></center>
                <br/>
                <br/>
                <br/>
                <div>
                    <FacetParagraph text="Facets are deliverable features. Use our extension to test, rollout and hide any elements  on your website. facet is a codeless solution that can be used by every member of your team. With facets, you can interface to any analytic platform of your choice."/>
                    <BulletPoints>
                        <div>
                        <br/>
                        <Checkmark><StyledImage src="./checkmark4.svg"/>
                            <FacetParagraph
                                //@ts-ignore
                                style={{justifySelf: "start", textAlign: "center"}}

                                text="Single line of code"/></Checkmark>
                        </div>
                        <div>
                        <br/>
                        <Checkmark><StyledImage src="./checkmark4.svg"/> <FacetParagraph
                            //@ts-ignore
                            style={{justifySelf: "start", textAlign: "center"}}
                            text="Secure"/></Checkmark>
                        </div>
                        <div>
                        <br/>
                        <Checkmark><StyledImage src="./checkmark4.svg"/> <FacetParagraph
                            //@ts-ignore
                            style={{justifySelf: "start", textAlign: "center"}}
                            text="Low maintenance"/></Checkmark>
                        </div>
                        <div>
                        <br/>
                        <Checkmark><StyledImage src="./checkmark4.svg"/> <FacetParagraph
                            //@ts-ignore
                            style={{justifySelf: "start", textAlign: "center"}}
                            text="Performant"/></Checkmark>
                        </div>
                        <div>
                            <br/>
                            <Checkmark><StyledImage src="./checkmark4.svg"/> <FacetParagraph
                                //@ts-ignore
                                style={{justifySelf: "start", textAlign: "center"}}
                                text="Unblocked teams"/></Checkmark>
                        </div>
                        <div>
                            <br/>
                            <Checkmark><StyledImage src="./checkmark4.svg"/> <FacetParagraph
                                //@ts-ignore
                                style={{justifySelf: "start", textAlign: "center"}}
                                text="Built for engineers used by everyone"/></Checkmark>
                        </div>
                    </BulletPoints>
                    <br />
                    <br />
                    <ButtonDiv><FacetButton colorButtonStyle={primaryBtnColor} text="Get Started" onClick={() => { }} /></ButtonDiv>
                </div>
            </div>
            <div>
                <img src="./mock_site.svg"/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </MainDiv>
    );
}