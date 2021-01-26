import styled from 'styled-components';
import {color, documentationIds} from '../constant'


import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const StyledDiv = styled.div`
    background-color: white;
`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Line = styled.div`
  background-color: ${color.primary};
  width:100%;
  height: .1rem;
`;

const HeadingText = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 0 60px;
`;


export default function FAQ() {
    const classes = useStyles();
    return (
        <StyledDiv>
            <h2 id={documentationIds.faq} style={{fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600}}>Common Questions</h2>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Why Facet</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Facet abstracts the rollout mechanism that used to be achieved by using feature flags. At facet,
                        we believe that engineers shouldn't spend their time maintaining manual configurations that come
                        along with feature flags. We enable engineers to focus on building the future, while we build
                        the rollout mechanisms which offer rollout abstractions.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What is a facet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A facet is a set elements that construe a feature. For instance, a login form could be
                        considered a facet, with the elements being username and password.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>How to hide a facet before rolling out to
                        production?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Currently this is not possible, but we are working on adding this important feature soon!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Can I declare facets within backend technologies?
                        production?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Not yet. Our team is working hard to offer facet declaration for backend systems. We will be soon launching a pilot, initially we are targeting java as the piloting language. However, we are planning to open source the API, so that affiliating SDKs can be implemented from devs.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Is facet secure?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        At facet, Security is one of the main pillars of our culture. We have integrated with multiple vendors who champion DevSecOps, including Snyk and Github, to ensure secure codebases. We are also working on getting ISO, HIIPA and other security licenses.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Is facet open source??</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Currently, facet-extension is open source. We believe in open source and we plan to open source many of our systems as they become mature and ready for the public.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon htmlColor={color.primary}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>How to contact?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Open github issue or email us at support@facet.run
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </StyledDiv>
    )
}
