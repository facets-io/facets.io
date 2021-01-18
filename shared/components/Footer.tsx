import { color } from "../constant";
import FacetLabel from "./FacetLabel";
import StayUpdated from "./StayUpdated";

export default function Footer() {
    return (
        <div>
            <StayUpdated />
            <br />
            <br />
            <div style={{ textAlign: 'center', backgroundColor: color.secondaryGray}}>
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
