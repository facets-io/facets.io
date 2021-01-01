import styled from 'styled-components';
import { color } from '../constant';

const StyledDiv = styled.div`
    background-color: ${props => props.color};
    padding: 2rem;
`;

export default function ContentContainer({ children }) {
    return (
        <StyledDiv color={color.facetBlack}>
            {children}
        </StyledDiv>
    )
}
