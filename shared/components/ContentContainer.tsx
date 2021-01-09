import styled from 'styled-components';
import { color as colorConstant } from '../constant';

const StyledDiv = styled.div`
    background-color: ${props => props.color};
    padding: ${props => props.hasPadding ? '1.5rem' : ''};
`;

export default function ContentContainer({ color = colorConstant.darkGray, hasPadding = true, style = {}, children }) {
    return (
        <StyledDiv style={style} color={color} hasPadding={hasPadding}>
            {children}
        </StyledDiv>
    )
}
