import styled from 'styled-components';
import { color, color as colorConstant, documentationIds, fontSize } from '../constant';
import FAQ from './FAQ';
import FacetLabel from "./FacetLabel";
import FacetParagraph from "./FacetParagraph";
import FacetH1 from './FacetH1';
import FacetBlockQuote from './FacetBlockQuote';
import Introduction from './Documentation/Introduction';
import DownloadAndInstall from './Documentation/DownloadAndInstall';
import AddDomain from './Documentation/AddDomain';
import FacetDeclaration from './Documentation/FacetDeclaration';
import Preview from './Documentation/Preview';

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
                <FAQ />
                <br />
            </div>
        </StyledDiv >
    )
}
