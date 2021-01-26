import styled from 'styled-components';
import {color, color as colorConstant, fontSize} from '../constant';
import FacetLabel from "./FacetLabel";

const InnerDiv = styled.div`
    background-color: ${props => props.color};
    padding: ${props => props.padding};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    width: 100%;
    max-width: 100rem;
    margin: auto;
`;

const OuterDiv = styled.div`
    background-color: ${props => props.color};
    width: 100%;
`;

export default function ContentContainer({ color = colorConstant.black, padding = "3rem", paddingTop = "3rem", paddingBottom = "3rem",style = {}, children}) {
    return (
        <OuterDiv style={style} color={color}>
            <InnerDiv padding={padding} paddingTop={paddingTop} paddingBottom={paddingBottom}>
              {children}
            </InnerDiv>
        </OuterDiv>
    )
}
