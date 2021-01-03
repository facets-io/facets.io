import styled from 'styled-components';
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