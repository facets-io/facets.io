import styled from 'styled-components';
import { color } from '../constant';
import Introduction from './Documentation/Introduction';
import AddDomain from './Documentation/AddDomain';
import FacetDeclaration from './Documentation/FacetDeclaration';
import Preview from './Documentation/Preview';
import Integration from './Documentation/Integration';
import InstallChromeStore from './Documentation/InstallChromeStore';

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
                <Introduction />
                {Space}
                <InstallChromeStore />
                {Space}
                <AddDomain />
                {Space}
                <FacetDeclaration />
                {Space}
                <Preview />
                {Space}
                <Integration />
            </div>
        </StyledDiv >
    )
}

export default Documentation;