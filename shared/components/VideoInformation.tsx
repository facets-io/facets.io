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
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                    margin: '2rem',
                }}
            >
                <iframe
                    allowFullScreen
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    // @ts-ignore
                    width={iframeDimensions[0]} height={iframeDimensions[1]} src="https://www.youtube.com/embed/mvM7AnwMe8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
            <br />
            <br />
        </MainDiv>
    );
}