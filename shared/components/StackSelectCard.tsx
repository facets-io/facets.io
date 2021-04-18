import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { color } from '../constant';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 150px;
    height: 200px;
`;

const PrimaryTextTypography = styled(Typography)`
    color: ${color.primary};
    font-weight: 'bold';
`;

const SubLabelTypography = styled(Typography)`
    color: ${color.lightGray};
    margin-bottom: .5rem;
`

const StackSelectCard = ({ logo, label, linkUrl = '/documentation', width = '100rem', height = '100rem', subLabel = undefined }) => {
    return < >
        <Link href={linkUrl}>
            <StyledCard>
                <CardActionArea disabled={subLabel}>
                    <br />
                    <img width={width} height={height} src={logo} />
                    <CardContent>
                        <PrimaryTextTypography>
                            {label}
                        </PrimaryTextTypography>
                        <SubLabelTypography>
                            {subLabel}
                            <br />
                        </SubLabelTypography>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Link>
    </>
}

export default StackSelectCard;