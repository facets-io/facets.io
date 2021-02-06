import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isMobile, responsiveThresholds } from '../constant';
import useMedia from '../hooks/useMedia';

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 100%;
    }
`;


export default ({ element, isReverse = false, children = null }) => {
    const media = useMedia();
    // const [isViewMobile, setIsViewMobile] = useState(false);

    // setIsViewMobile(isMobile(media))
    const isViewMobile = isMobile(media);

    const result = isViewMobile ? <InnerDiv>
        <div>
            {element.title}
            {element.paragraph}
            {element.image}
        </div>
    </InnerDiv> : !isReverse ? <InnerDiv>
        <div>
            {element.title}
            {element.paragraph}
        </div>
        <div>
            {element.image}
        </div>

    </InnerDiv> : <InnerDiv>
                <div>
                    {element.image}
                </div>
                <div>
                    {element.title}
                    {element.paragraph}
                </div>
            </InnerDiv>

    return result;
}