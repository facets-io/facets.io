import styled from 'styled-components';
import { color as colorConstant } from '../constant';

const StyledDiv = styled.div`
    background-color: ${props => props.color};
    padding: 2rem;
`;

export default function ContentContainer({ color = colorConstant.facetBlack, children }) {
    return (
        <StyledDiv color={color}>
            {children}
        </StyledDiv>
    )
}
