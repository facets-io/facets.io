import styled from 'styled-components';
import { color } from '../constant';
import JavaDownload from './JavaDownload';
import JavaInstall from './JavaInstall';
import JavaIntro from './JavaIntro';
import JavaVideo from './JavaVideo';
import TroubleshootingJava from './TroubleshootingJava';
import UsageCasesJava from './UsageCasesJava';

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
                <JavaDownload />
                {Space}
                <JavaInstall />
                {Space}
                <TroubleshootingJava />
                {Space}
                <UsageCasesJava />
                {Space}
                <JavaVideo />
            </div>
        </StyledDiv >
    )
}

export default Documentation