import { IconButton, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import * as eva from "eva-icons"
import { color } from '../constant'
import styled from 'styled-components'

const useStyles = makeStyles({
    iconButton: {
        padding: '.25rem',
        display: 'grid',
        textAlign: 'center',
        // @ts-ignore
        width: props => props.width ? props.width : '',
    },
    i: {
        display: 'grid',
        // @ts-ignore
        fill: props => props.isSelected ? color.electricB : '',
        "&:hover": {
            fill: color.white
        }
    }
});

const StyledIconButton = styled(IconButton)`
    padding: .25rem;
    display: grid;
    text-align: center;
    width: ${props => props.width ? props.width : ''};
`

const StyledI = styled.i`
    display: grid,
    fill: ${props => props.isSelected ? color.electricB : ''},
    "&:hover": {
        fill:  color.white
    }
`

export default ({ name, size = "small", fill = color.lightGray,
    isSelected = true, customHeight = null, width = null, iconWidth = null, iconHeight = null, children, ...other }) => {

    useEffect(() => {
        eva.replace();
    }, [name]);

    return <StyledIconButton
        {...other}>
        <StyledI
            style={{
                height: customHeight ? customHeight : ''
            }}
            // @ts-ignore
            fill={fill}
            data-eva={name}
            data-eva-hover="true"
            data-eva-height={iconHeight ? iconHeight : '24'}
            data-eva-width={iconWidth ? iconWidth : '24'}
        />
        {children}
    </StyledIconButton>
}