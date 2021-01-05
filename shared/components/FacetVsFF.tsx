import { color } from "../constant";
import FacetLabel from "./FacetLabel";

export default function FacetVsFF() {
    return (
        <div>
            <div>
                <FacetLabel text="Simple, Safe, and fast feature rollout with Facets" />
            </div>
            <div>
                <FacetLabel text="Use facets to save countless lines of code and resources" />
            </div>
            <div>
                <div>
                    Rollout features without code
                </div>
                <div>
                    Facets are deliverable features. Use our extension to test, rollout and hide any elements  on your website. facet is a codeless solution that can be used by every member of your team. With facets, you can interface to any analytic platform of your choice.
                </div>
            </div>
            <div>
                <div>
                    Manage feature life cycle simply
                </div>
                <div>
                    Other solutions like feature flags continuously require developer time, maintenance and new code for every feature rollout. With facets, you can rollout feature safely and simply without any code or system maintenance. facets are developer-minded and product-owner friendly.
                </div>
            </div>
        </div>
    );
}