import React from 'react';
import styled from 'styled-components';
import StyledFacetLabel from './StyledFacetLabel';

const CoreGrid = styled.div`
    text-align: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 1%;
    justify-content: center;
`

const UserInput = () => {
    return <>
        <br />
        <br />
        <CoreGrid>
            <StyledFacetLabel text="User Input" />
        </CoreGrid>
        <br />
        <br />
        <Grid>
            <div>
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Impressed by <a href="https://twitter.com/RunFacet?ref_src=twsrc%5Etfw">@RunFacet</a> - a new no-code tool for managing features in production. Great for simplifying product/feature rollouts &amp; collaboration btwn eng/product/marketing</p>&mdash; Will Portman (@wdportman) <a href="https://twitter.com/wdportman/status/1366916758431428613?ref_src=twsrc%5Etfw">March 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <div>
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Very excited to be an early user of <a href="https://twitter.com/RunFacet?ref_src=twsrc%5Etfw">@RunFacet</a>. The low-code feature management approach is a game changer and a will surely make the CI/CD flows more robust.</p>&mdash; Yeshwanth kumar (@morpheyesh) <a href="https://twitter.com/morpheyesh/status/1368134032043765760?ref_src=twsrc%5Etfw">March 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <div>
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">I have to say <a href="https://twitter.com/RunFacet?ref_src=twsrc%5Etfw">@RunFacet</a> impressed me a lot. It could be a game changer as feature flag is always one of the pain point for software development!</p>&mdash; 牧野陽一 (@makinoalany) <a href="https://twitter.com/makinoalany/status/1367565099561414658?ref_src=twsrc%5Etfw">March 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </Grid>
        <br />
    </>
}


export default UserInput;