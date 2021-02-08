import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    text-align: center;
`;

export default function VideoInformation() {
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
                <a href="https://youtu.be/mvM7AnwMe8A" target="_blank">
                    <img style={{ maxWidth: '40rem' }} width="85%" src="./blank_video.svg" alt="Facet logo" />
                </a>
            </div>
            <br /><br />
        </MainDiv>
    );
}