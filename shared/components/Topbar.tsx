import FacetButton, {primaryBtnColor} from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import {color, fontSize} from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";
import JsonAnimation from "./JsonGIF";
import mock_site from '../../public/mock_site.json'

const MainDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
`;


const Checkmark = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    grid-gap: .8rem;
    justify-content: left;
    align-items: center;
`;


const BulletPoints = styled.div`
    display: grid;
    grid-template-columns: 0% 50%;
    grid-template-rows: 40% 50%
    justify-content: center;
    align-items: center;
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 23% 40%;
    text-align: left;
    justify-content: left
`;

const StyledImage = styled.img`
    height: 1rem;
`;

export default function Navbar() {
    return (
        <div>
            <MainDiv><FacetLabel color={color.black} fontSize={"42px"} fontWeight={700} text="Release Fast"/>
            </MainDiv>
            <br/>
            <br/>
            <br/>
            <MainDiv>
                <div>
                    <div>
                        <FacetParagraph text="Facets are a codeless solution for managing feature life cycles. Manage unlimited features without code or system maintenance. Our platform is developer-minded and user-friendly."/>
                        <BulletPoints>
                            <div/>
                            <div>
                                <br/>
                                <Checkmark><StyledImage src="./checkmark4.svg"/>
                                    <FacetParagraph text="Single line of code"/>
                                </Checkmark>
                            </div>
                            <div/>
                            <div>
                                <br/>
                                <Checkmark><StyledImage src="./checkmark4.svg"/>
                                    <FacetParagraph text="No maintenance"/>
                                </Checkmark>
                            </div>
                            <div/>
                            <div>
                                <br/>
                                <Checkmark><StyledImage src="./checkmark4.svg"/>
                                    <FacetParagraph text="Unblocked teams"/>
                                </Checkmark>
                            </div>
                        </BulletPoints>
                        <br/>
                        <br/>
                        <ButtonDiv>
                            <FacetButton colorButtonStyle={primaryBtnColor} minWidth="8rem" text="Get Started" onClick={() => {}}/>
                        </ButtonDiv>
                    </div>
                </div>
                <div>
                    <JsonAnimation animationData={mock_site}/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </MainDiv>
        </div>
    );
}