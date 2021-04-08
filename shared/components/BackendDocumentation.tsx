import styled from 'styled-components';
import { color } from '../constant';
import JavaInstall from './JavaInstall';
import JavaIntro from './JavaIntro';
import JavaSettings from './JavaSettings';
import JavaVerify from './JavaVerify';

const StyledDiv = styled.div`
    color: ${color.black};
    font-family: Manrope;
    font-weight: 400;
`;

const Space = <>
    < br />
</>

const Documentation = () => {
    return (
        <StyledDiv>
            <div>
                <JavaIntro />
                {Space}
                <JavaInstall />
                {Space}
                <JavaVerify />
                {Space}
                <JavaSettings />
            </div>
        </StyledDiv >
    )
}

export default Documentation;