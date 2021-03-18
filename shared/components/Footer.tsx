import { color, links } from "../constant";
import FacetLabel from "./FacetLabel";
import StayUpdated from "./Subscribe";
import Link from 'next/link'
import styled from "styled-components";

const StyledImg = styled.img`
  cursor: pointer;
`

export default function Footer() {
  return (
    <footer>
      <br />
      <StayUpdated />
      <div style={{ textAlign: 'center', backgroundColor: color.secondaryGray }}>
        <div>
          <Link href="/"><StyledImg src="/facet_typography_primary.svg" alt="Facet logo" height="30" /></Link>
        </div>
        <br />
        <div>
          <StyledImg
            onClick={() => { window.open(links.github, "_blank") }}
            src="/gitHub.svg" height="24.71" />
          <StyledImg
            style={{ marginLeft: '.5rem' }}
            onClick={() => { window.open("https://twitter.com/runFacet/", "_blank") }}
            src="/twitter.svg" height="24.71" />
        </div>
        <br />
        <div>
          <FacetLabel color={color.lightGray} fontFamily="Manrope" fontSize="16" text="Copyright © Facet Technologies, Inc. 2021" />
          <br />
          <FacetLabel color={color.lightGray} fontFamily="Manrope" fontSize="16" text="All rights reserved" />
        </div>
        <br />
      </div>
    </footer>
  )
}
