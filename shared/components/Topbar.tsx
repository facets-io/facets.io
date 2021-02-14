import FacetButton, { primaryBtnColor } from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import FacetParagraph from "./FacetParagraph";
import JsonAnimation from "./JsonGIF";
import mock_site from '../../public/GIf_.json'
import TitleParagraphImage from './TitleParagraphImage';

const MainDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 85%;
    justify-content: center;
    text-align: initial;
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
    grid-template-rows: 40% 100%
    justify-content: center;
    align-items: center;
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 23% 40%;
    text-align: left;
    justify-content: left;

    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 100%;
        justify-content: center;
        text-align: center;
    }
`;

const StyledImage = styled.img`
    height: 1rem;
`;

const Centered = styled.div`
    text-align: initial;

    @media (max-width: 720px) {
        text-align: center;
    }
`

export default function Navbar() {
    return (
        <div>
            <MainDiv>
                <Centered>
                    <FacetLabel color={color.black} fontSize={"42px"} fontWeight={700} text="Rollout Features Without Code" />
                </Centered>
            </MainDiv>
            <TitleParagraphImage element={{
                title: null,
                paragraph: <div>
                    <div>
                        <FacetParagraph text="Facets offers a codeless solution for managing features. With Facet, Engineering and Product teams work together to deliver software faster and safer." />
                        <BulletPoints>
                            <div />
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Use a single line of code" />
                                </Checkmark>
                            </div>
                            <div />
                            <div />
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Instantly toggle features in production" />
                                </Checkmark>
                            </div>
                            <div>
                                <br />
                                <Checkmark><StyledImage src="./checkmark4.svg" />
                                    <FacetParagraph text="Manage features without using engineering resources" />
                                </Checkmark>
                            </div>
                        </BulletPoints>
                        <br />
                    </div>
                </div>,
                image: <div>
                    <JsonAnimation animationData={mock_site} />
                </div>,
                extraElement:
                    <ButtonDiv >
                        <FacetButton
                            onClick={() => { window.open("https://chrome.google.com/webstore/detail/facet/hpkpjkdhgldjhcopdkmljdgceeojoglh?hl=en") }}
                            maxWidth="40%" colorButtonStyle={primaryBtnColor} minWidth="8rem" text="Get Started" />
                    </ButtonDiv>
            }} />
        </div>
    );
}