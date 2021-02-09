import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize, isMobile } from "../constant";
import useMedia from "../hooks/useMedia";

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    text-align: center;
`;

export default function VideoInformation() {

    const media = useMedia();
    const isMobileView = isMobile(media);
    const iframeDimensions = isMobileView ? [280, 157] : [560, 315];

    console.log('iframeDimensions', iframeDimensions);

    return (
        <MainDiv>
            <br />
            <br />
            <div>
                <FacetLabel color={color.black} fontSize={"36px"} fontWeight={700} text="Learn how to use Facet" />
            </div>
            <br />
            <br />
            <br />
            <div>
                {/* @ts-ignore */}
                <iframe width={iframeDimensions[0]} height={iframeDimensions[1]} src="https://www.youtube.com/embed/mvM7AnwMe8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
            <br /><br />
        </MainDiv>
    );
}