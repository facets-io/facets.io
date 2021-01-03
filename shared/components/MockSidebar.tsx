import { useContext } from 'react';
import { color } from "../constant";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import FacetIconButton from "./FacetIconButton";
import AppContext from './AppContext';

const StyledDiv = styled.div`
    text-align: normal;
    background-color: ${color.darkestGray};
    height: 100%;
`;

const InitialAlignDiv = styled.div`
    text-align: initial;
    padding: .5rem;
    margin-left: .8rem;
    display: grid;
    cursor: pointer;
    grid-template-columns: 80% 20%;
`;

const allFacets = {
    facet1: 'Facet-1',
    facet2: 'Facet-2',
    facet3: 'Facet-3',
    facet4: 'Facet-4'
}


export default function MockSidebar() {

    const { hiddenFacets, setHiddenFacets } = useContext(AppContext);
    console.log('CHECKMEm', hiddenFacets);
    return (
        <>
            <StyledDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet1} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet1) ?
                        <FacetIconButton isSelected={true} onClick={() => { setHiddenFacets(hiddenFacets.filter(e => e !== allFacets.facet1)) }} name="eye-outline" component="span" />
                        : <FacetIconButton isSelected={false} onClick={() => { setHiddenFacets([...hiddenFacets, allFacets.facet1]) }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet2} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet2) ? <FacetIconButton onClick={() => { }} name="eye-outline" component="span" />
                        : <FacetIconButton onClick={() => { }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet3} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet3) ? <FacetIconButton onClick={() => { }} name="eye-outline" component="span" />
                        : <FacetIconButton onClick={() => { }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet4} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet4) ? <FacetIconButton onClick={() => { }} name="eye-outline" component="span" />
                        : <FacetIconButton onClick={() => { }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
            </StyledDiv>
        </>
    );
}