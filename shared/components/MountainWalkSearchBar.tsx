import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import FacetInput from './FacetInput';
import MountainWalkInput from './MountainWalkInput';

const MainDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export default function MountainWalkSearchBar() {
    return (
        <div>
            <MainDiv>
                <MountainWalkInput />
            </MainDiv>
        </div>
    );
}