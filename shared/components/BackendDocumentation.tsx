import styled from 'styled-components';
import { color } from '../constant';
import FAQ from './FAQ';
import Introduction from './Documentation/Introduction';
import DownloadAndInstall from './Documentation/DownloadAndInstall';
import AddDomain from './Documentation/AddDomain';
import FacetDeclaration from './Documentation/FacetDeclaration';
import Preview from './Documentation/Preview';
import Integration from './Documentation/Integration';
import InstallChromeStore from './Documentation/InstallChromeStore';
import JavaIntro from './javaIntro';
import JavaInstall from './JavaInstall';
import JavaIntegration from './JavaIntegration';

const StyledDiv = styled.div`
    color: ${color.black};
    font-family: Manrope;
    font-weight: 400;
`;

const Space = <>
    < br />
    < br />
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
                <JavaIntegration />
            </div>
        </StyledDiv >
    )
}

export default Documentation;