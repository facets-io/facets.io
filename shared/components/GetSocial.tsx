import FacetButton from "./FacetButton";
import FacetInput from "./FacetInput";
import FacetLabel from "./FacetLabel";

export default function GetSocial() {
    return (
        <div>
            <div>
                <FacetButton text="Download Our Chrome Extension" />
            </div>
            <div>
                <div>
                    <FacetInput />
                </div>
                <FacetButton text="STAY UPDATED" />
            </div>
        </div>
    );
}