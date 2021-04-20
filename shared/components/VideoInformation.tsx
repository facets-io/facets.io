import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize, isMobile } from "../constant";
import useMedia from "../hooks/useMedia";
import StyledFacetLabel from "./StyledFacetLabel";

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    text-align: center;
`;

const StyledVideo = styled.video`
    width: 100% !important;
    height: auto !important;
`;

export default function VideoInformation() {

    return (
        <MainDiv>
            <br />
            <br />
            <br />
            <div>
                <StyledFacetLabel text="Learn how to use Facet" />
            </div>
            <br />
            <br />
            <div style={{
                background: 'white',
                maxWidth: '900px',
                margin: '0 auto',
                padding: '1rem'
            }}>
                <StyledVideo poster="./video/video_placeholder.jpg" src="./video/java.mp4" controls />
            </div>
            <br />
        </MainDiv >
    );
}