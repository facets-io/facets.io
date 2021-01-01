import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color } from '../constant';
import FacetLabel from './FacetLabel';

const MainDiv = styled.div`
    background-color: ${color.facetBlack};
    width: 100%;
    text-align: center;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <FacetLabel text="Deploy Features Faster" />
            <br />
            <FacetLabel text="Rollout features without code and improve your team's productivity" />
            <div>
            </div>
            <div>
                <FacetButton style={{ width: '80%' }} text="Download Our Chrome Extension" onClick={() => { }} />
                <FacetLink variant="contained" type="submit" text="Demo" onClick={() => { }} />
            </div>
        </MainDiv>
    );
}