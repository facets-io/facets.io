import { color } from "../constant";
import FacetLabel from "./FacetLabel";
import StayUpdated from "./StayUpdated";
import Link from 'next/link'
import styled from "styled-components";

const StyledImg = styled.img`
  cursor: pointer;
`

const Div = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0rem;
  padding: 0 425px;
`

export default function Footer() {
  return (
    <div>
      <StayUpdated />
      <br />
      <br />
      <div style={{ textAlign: 'center', backgroundColor: color.secondaryGray }}>
        <div>
          <Link href="/"><StyledImg src="/facet_typography_primary.svg" alt="Facet logo" height="30" /></Link>
        </div>
        <br />

        <Link href="https://github.com/facets-io/">
          <StyledImg
            onAuxClick={() => { window.open("https://github.com/facets-io/", "_blank") }}
            src="/gitHub.svg" height="24.71" />
        </Link>
        <Link
          href="https://twitter.com/runFacet/">
          <StyledImg
            onAuxClick={() => { window.open("https://twitter.com/runFacet/", "_blank") }}
            src="/twitter.svg" height="24.71" />
        </Link>
        <br />
        <br />
        <Div>
          <FacetLabel color={color.black} fontFamily="Manrope" fontSize="16" text="Copyright © Facet Technologies, Inc. 2021 - All rights reserved.  " />
        </Div>
      </div>
    </div>
  )
}
