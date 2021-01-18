import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import {color, fontSize} from '../constant';
import FacetLabel from './FacetLabel';

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
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    height: 1rem;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <div style={{justifyContent: "left"}}>
                <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Release without thinking"/>
                <br/>
                <br/>
                <br/>
                <div>
                    <FacetLabel color={color.black}
                                text="Facets are deliverable features. Use our extension to test, rollout and hide any elements  on your website. facet is a codeless solution that can be used by every member of your team. With facets, you can interface to any analytic platform of your choice."/>
                    <div>
                    <br/>
                        <Checkmark><StyledImage src="./checkmark2.svg"/>
                        <FacetLabel
                            //@ts-ignore
                            style={{justifySelf: "start",textAlign: "center"}} color={color.black} text="Single line of code"/></Checkmark>
                    <br/>
                        <Checkmark><StyledImage src="./checkmark2.svg"/> <FacetLabel
                            //@ts-ignore
                            style={{justifySelf: "start",textAlign: "center"}} color={color.black} text="Zero engineering"/></Checkmark>
                    <br/>
                     <Checkmark><StyledImage src="./checkmark2.svg"/> <FacetLabel
                         //@ts-ignore
                         style={{justifySelf: "start",textAlign: "center"}} color={color.black} text="Unblocked teams"/></Checkmark>
                    <br/>
                         <Checkmark><StyledImage src="./checkmark2.svg"/> <FacetLabel
                        //@ts-ignore
                        style={{justifySelf: "start",textAlign: "center"}} color={color.black} text="Built for engineers used by anyone"/></Checkmark>
                    </div>
                </div>
            </div>
            <div>
                <img src="./mock_site.svg"/>
            </div>
            <br />
            <br />
            <br />
            <br />
        </MainDiv>
    );
}