import styled from 'styled-components';
import { color } from '../constant';
import FAQ from './FAQ';
import Introduction from './Documentation/Introduction';
import DownloadAndInstall from './Documentation/DownloadAndInstall';
import AddDomain from './Documentation/AddDomain';
import FacetDeclaration from './Documentation/FacetDeclaration';
import Preview from './Documentation/Preview';
import Integration from './Documentation/Integration';

const StyledDiv = styled.div`
    color: ${color.black};
    font-family: Manrope;
    font-weight: 400;
`;

export default () => {
    return (
        <StyledDiv>
            <div>
                <Introduction />
                <br />
                <DownloadAndInstall />
                <br />
                <AddDomain />
                <br />
                <FacetDeclaration />
                <br />
                <Preview />
                <br />
                <Integration />
                <br />
                <FAQ />
                <br />
            </div>
        </StyledDiv >
    )
}
