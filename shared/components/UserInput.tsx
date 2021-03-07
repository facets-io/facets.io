import React from 'react';
import styled from 'styled-components';
import { color } from '../constant';
import StyledFacetLabel from './StyledFacetLabel';
import TwitterCard from './TwitterCard';

const CoreGrid = styled.div`
    text-align: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    gap: 5%;
    justify-content: center;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 85%;
        justify-content: center;
    }
`

const StyledP = styled.p`
    & a {
        text-decoration: none;
        color: ${color.primary};
    }
`;

const UserInput = () => {
    return <>
        <br />
        <br />
        <br />
        <CoreGrid>
            <StyledFacetLabel text="User Input" />
        </CoreGrid>
        <br />
        <br />
        <br />
        <Grid>
            <div>
                <TwitterCard name="Will Portman" aHref='https://twitter.com/wdportman/status/1366916758431428613' info="@wdportman · March 3, 2021" imgSrc='/images/@wdportman.jpeg' >
                    <StyledP lang="en" dir="ltr">Impressed by <a href="https://twitter.com/RunFacet?ref_src=twsrc%5Etfw" target="_blank">@RunFacet</a> - a new no-code tool for managing features in production. Great for simplifying product/feature rollouts &amp; collaboration btwn eng/product/marketing</StyledP>
                </TwitterCard>
            </div>
            <div>

                <TwitterCard name="Yeshwanth Kumar" aHref='https://twitter.com/morpheyesh/status/1368134032043765760' info="@morpheyesh · March 6, 2021" imgSrc='/images/@morpheyesh.jpeg' >
                    <StyledP lang="en" dir="ltr">Very excited to be an early user of <a href="https://twitter.com/RunFacet?ref_src=twsrc%5Etfw" target="_blank">@RunFacet</a>. The low-code feature management approach is a game changer and a will surely make the CI/CD flows more robust.</StyledP>
                </TwitterCard>
            </div>
            <div>
                <TwitterCard name="牧野陽" aHref='https://twitter.com/makinoalany/status/1367565099561414658' info="@makinoalany · March 4, 2021" imgSrc='/images/@makinoalany.jpeg' >
                    <StyledP lang="en" dir="ltr">I have to say <a href="https://twitter.com/RunFacet?ref_src=twsrc%5Etfw" target="_blank">@RunFacet</a> impressed me a lot. It could be a game changer as feature flag is always one of the pain point for software development!</StyledP>
                </TwitterCard>
            </div>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
    </>
}


export default UserInput;