import { color } from "../constant";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.color}
    padding: 3rem;
`;

export default function ContentContainer() {
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: color.facetBlack }}>
                <div>
                    <img src="/facet_typography.svg" alt="Facet logo" />
                </div>
                <br />
                <FacetLabel text="Copyright Facet Technologies Inc. 2021 - All rights reserved. Terms of Service & Privacy Policy" />
                <br />
                <br />
            </div>
        </div>
    )
}
