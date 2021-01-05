import styled from 'styled-components';
import { color as colorConstant } from '../constant';

const StyledDiv = styled.div`
    background-color: ${props => props.color};
    padding: ${props => props.hasPadding ? '2rem' : ''};
`;

export default function ContentContainer({ color = colorConstant.darkGray, hasPadding = true, children }) {
    return (
        <StyledDiv color={color} hasPadding={hasPadding}>
            {children}
        </StyledDiv>
    )
}
