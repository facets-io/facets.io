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
    height: 180px;
`;

const PrimaryTextTypography = styled(Typography)`
    color: ${color.primary};
    fontWeight: 'bold';
`;

const StackSelectCard = ({ logo, label, linkUrl = '/documentation', width = '100rem', height = '100rem' }) => {
    return < >
        <Link href={linkUrl}>
            <StyledCard>
                <CardActionArea>
                    <br />
                    <img width={width} height={height} src={logo} />
                    <CardContent>
                        <PrimaryTextTypography>
                            {label}
                        </PrimaryTextTypography>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Link>
    </>
}

export default StackSelectCard;