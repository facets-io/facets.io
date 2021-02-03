import FacetButton, { primaryBtnColor } from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
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
    grid-template-columns: 0% 100%%;
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
            <MainDiv><FacetLabel color={color.black} fontSize={"42px"} fontWeight={700} text="No-code feature rollouts" />
            </MainDiv>
            <br />
            <br />
            <br />
            <MainDiv>
                <div>
                    <div>
                        <FacetParagraph text="Facets are a codeless solution for managing features. With facets, DevOps and Product teams converge to deliver software faster and safer." />
                        <BulletPoints>
                            <div />
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Use a single line of code" />
                                </Checkmark>
                            </div>
                            <div />
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Decouple feature management from engineering resources" />
                                </Checkmark>
                            </div>
                            <div />
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Streamline your software delivery process " />
                                </Checkmark>
                            </div>
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Instantly enable and disable features in production " />
                                </Checkmark>
                            </div>
                        </BulletPoints>
                        <br />
                        <br />
                        <ButtonDiv>
                            <FacetButton colorButtonStyle={primaryBtnColor} minWidth="8rem" text="Get Started" onClick={() => { location.href = 'https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh' }} />
                        </ButtonDiv>
                    </div>
                </div>
                <div>
                    <JsonAnimation style={{ borderRadius: "0", overflow: "hidden", width: undefined, height: undefined, boxShadow: `0px 0px 300px -60px ${color.black}` }} animationData={mock_site} />
                </div>
                <br />
                <br />
                <br />
                <br />
            </MainDiv>
        </div>
    );
}