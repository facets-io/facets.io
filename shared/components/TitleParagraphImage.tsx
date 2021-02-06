import styled from 'styled-components';
import { isMobile } from '../constant';
import useMedia from '../hooks/useMedia';

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 85%;
        justify-content: center;
    }
`;

export default ({ element, isReverse = false }) => {
    const media = useMedia();
    const isViewMobile = isMobile(media);

    const result = isViewMobile ? <InnerDiv>
        <div>
            {element.title}
            <br />
            {element.paragraph}
            <br />
            <br />
            <div>
                {element.image}
            </div>
        </div>
    </InnerDiv> : !isReverse ? <InnerDiv>
        <div>
            {element.title}
            {element.paragraph}
        </div>
        <div>
            <br />
            {element.image}
        </div>

    </InnerDiv> : <InnerDiv>
                <div>
                    <br />
                    {element.image}
                </div>
                <div>
                    {element.title}
                    {element.paragraph}
                </div>
            </InnerDiv>
    return result;
}