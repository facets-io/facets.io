import styled from 'styled-components';
import { documentationIds, links } from '../constant'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const StyledDiv = styled.div`
    background-color: white;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: fit-content(60%);
    align-content: center;

    @media (max-width: 1024px) {
        grid-template-columns: fit-content(80%);
    }
`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
            <h2 id={documentationIds.faq} style={{ textAlign: 'center', fontFamily: "Helvetica", fontSize: "27px", fontWeight: 600 }}>FAQ</h2>

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
                        Facet abstracts the feature management process that is commonly achieved by using feature flags. At facet, we believe that engineers shouldn't spend their time maintaining manual configurations. We enable engineers to focus on building their product, while we build the feature management abstractions to support them throughout the journey.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography className={classes.heading}>Is your platform production-ready?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The platform is not production-ready <i>yet</i>. We need your help to identify potential edge cases and bugs to iron out.
                        We would be glad to receive your feedback and we are committed to providing you hands-on support on any issues that might arise during onboarding.
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
                    <Typography>
                        A facet is a set elements that construe a feature. For instance, a login form could be considered a facet, with the elements being email, password and the login button.
                        In terms of backend applications, a facet is any method that's declared within the codebase.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.shadow}>
                <AccordionSummary
                    expandIcon={<img src="/toc_expand.svg" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>What is your roadmap?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some of our scheduled features are the following:
                        <ol>
                            <li>Ability to schedule a rollout</li>
                            <li>CRUD facets in responsive layouts</li>
                            <li>Add environment configuration</li>
                            <li>OAuth 2.0 and Single Sign-On (SSO)</li>
                        </ol>
                        You can also find what we are currently working on through our <a href={links.github}>GitHub page</a>.
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
                    <Typography>
                        At facet, security is at the center of our priorities. We have integrated with multiple vendors who champion DevSecOps, including <a href='https://snyk.io/'>Snyk</a> and {''}
                        <a href='https://github.com/dependabot'>Github</a>, to ensure secure codebases. We are also working on getting CCPA, GDPR, HIPAA, FERPA, PCI, SOC 2 and other data privacy regulations.                    </Typography>
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
                    <Typography>
                        Currently, the <a href="https://github.com/facet-tech/facet-extension">facet-extension</a> and the <a href='https://github.com/facet-tech/agent-java'>facet-java-agent</a> are <a href={links.github}></a>open source. We support open source initiatives as well as the community support that comes with it, and we plan to open source more of our systems as they become more mature.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </StyledDiv >
    )
}
