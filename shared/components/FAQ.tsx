import styled from 'styled-components';
import { color, documentationIds } from '../constant'


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from "@material-ui/core";


const StyledDiv = styled.div`
    background-color: white;
`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 600,
    },
    body: {
        color: "#5D5D5D"
    },
    border: {
    },
    borderDetails: {
    },
    shadow: {
        boxShadow: "0px 2px 1px -1px #9D1757, 0px 1px 1px 0px #9D1757, 0px 1px 3px 0px #9D1757"
    }
}));


export default function FAQ() {
    const classes = useStyles();
    return (
        <StyledDiv>
            <h2 id={documentationIds.faq} style={{ fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }}>Common Questions</h2>

            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography className={classes.heading}>Why Facet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Facet abstracts the rollout process that is commonly achieved by using feature flags. At facet, we believe that engineers shouldn't spend their time maintaining manual configurations like the ones feature flags require. We enable engineers to focus on building their product, while we build the rollout abstractions to support them throughout the journey.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"

                >
                    <Typography className={classes.heading}>What is a facet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        A facet is a set elements that construe a feature. For instance, a login form could be considered a facet, with the elements being email, password and the login button.
                    <div style={{ textAlign: 'center' }}>
                            <figure>
                                <img width='100%' src='../../images/authentication_facet_example.png' />
                                <figcaption>Installing facet-extension in Chrome</figcaption>
                            </figure>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>How to hide a facet before rolling out to
                        production?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Currently this is not possible, but we are working on adding this important feature.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Can I declare facets within backend technologies?
                        production?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Not yet. Our team is working hard to offer facet declaration for backend systems. We will be soon launching a pilot, initially we are targeting java as the piloting language. However, we are planning to open source the API, so that affiliating SDKs can be implemented from devs.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}> Is JS/HTML code delivered at all after disabling a facet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        JS code is delivered at all times to the end user. The facet CDN script observes facets and hides them from the website, but code is still being delivered to the website.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}> My facet is declared in multiple pages (ie: menu). Can I declare a global facets?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Yes. By default, facets are declared global. You can change their visibility to non-global, which mean that their rules will be applied to the current domain (pathname). Click on the desired facet -> select the "more options button", and click on the "global" checkbox.
                        <br />
                        <figure>
                            <img width='100%' src='../../images/global_facet_declaration.png' />
                            <figcaption>Global facet declaration</figcaption>
                        </figure>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Is facet secure?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        At facet, Security is at the center of our priorities. We have integrated with multiple vendors who champion DevSecOps,including <a href='https://snyk.io/'>Snyk</a> and {''}
                        <a href='https://github.com/dependabot'>Github</a>, to ensure secure codebases. We are also working on getting CCPA, GDPR, HIPAA, FERPA, PCI and other data privacy regulations.                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Is facet open source?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Currently, facet-extension is open source. We believe in open source and we plan to open source many of our systems as they become mature and ready for the public.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>How to contact?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                        Open <a href='https://github.com/facets-io/facet-extension/issues'>github issue</a> or email us at support@facet.run
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </StyledDiv>
    )
}
