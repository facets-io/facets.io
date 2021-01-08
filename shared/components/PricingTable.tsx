import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import FacetSwitch from './FacetSwitch';

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 50% 30%
    background-color: ${color.darkGray};
    width: 100%;
    height: 100%;
`;

const ColumnADiv = styled.div`
`

export default function PricingTable() {

    const columnA = <div>
        <div>
            Requests
        </div>
        <div>
            FACETS
        </div>
        <div>
            SUPPORT
        </div>
    </div>;

    const columnB = <div>
        <div>
            <div>
                Billed Monthly Or Billed Annually
            </div>
            <div>
                <div>
                    <div>
                        Tester
                    </div>
                    <div>
                        free
                    </div>
                </div>
                <div>
                    <div>
                        Starter
                    </div>
                    <div>
                        $ 70/mo
                    </div>
                </div>
                <div>
                    <div>
                        Professional
                    </div>
                    <div>
                        $ 250/mo
                    </div>
                </div>
            </div>
            <div>
                {/* border goes here.. */}
            </div>
            <div>
                <div>
                    10,000
                </div>
                <div>
                    100,000
                </div>
                <div>
                    500,000
                </div>
            </div>
            <div>
                <div>
                    EMAIL
                </div>
                <div>
                    EMAIL
                </div>
                <div>
                    EMAIL
                </div>
            </div>
            <div>
                <div>
                    Signup
                </div>
                <div>
                    Buy
                </div>
                <div>
                    Buy
                </div>
            </div>
        </div>
        <div>
            Which plan suits you best?
        </div>
        <div>
            Calculate here your choice.
        </div>
    </div>

    return (
        <div>

        </div>
    );
}