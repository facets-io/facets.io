import styled from 'styled-components';
import { color as colorConstant } from '../constant';

const InnerDiv = styled.div`
    background-color: ${props => props.color};
    padding: ${props => props.hasPadding ? '3rem' : ''};
    width: 100%;
    max-width: 100rem;
    margin: auto;
`;

const OuterDiv = styled.div`
    background-color: ${props => props.color};
    width: 100%;
`;

export default function ContentContainer({ color = colorConstant.black, hasPadding = true, style = {}, children }) {
    return (
        <OuterDiv style={style} color={color}>
            <InnerDiv hasPadding={hasPadding}>
              {children}
            </InnerDiv>
        </OuterDiv>
    )
}
