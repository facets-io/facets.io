import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';

const MainDiv = styled.div`
    width: 100%;
    text-align: center;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 50% 50%;
    text-align: initial;
`;

export default function Secondary() {
    return (
        <MainDiv>
            <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="What can facets do?" />
            <br /><br /><br />
            <InnerDiv>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={fontSize.medium} text="Rollout features without code" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetLabel color={color.black} text="Facets are deliverable features. Use our extension to test, rollout and hide any elements  on your website. facet is a codeless solution that can be used by every member of your team. With facets, you can interface to any analytic platform of your choice." />
                    </div>
                </div>
                <div>
                    <div>
                        <b>
                            <FacetLabel color={color.black} fontSize={fontSize.medium} text="Manage feature life cycle simply" />
                        </b>
                    </div>
                    <br />
                    <div>
                        <FacetLabel color={color.black} text="Other solutions like feature flags continuously require developer time, maintenance and new code for every feature rollout. With facets, you can rollout feature safely and simply without any code or system maintenance. facets are developer-minded and product-owner friendly." />
                    </div>
                </div>
            </InnerDiv>
        </MainDiv>
    );
}