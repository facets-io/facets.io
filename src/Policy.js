import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import marked from "marked";
import $ from 'jquery';

// taken from https://www.privacypolicygenerator.info/live.php?token=eUg6GEKWZLykgtXcLaCokswWBQRuglLi
const StyledSection = styled.section`
    background-color: white;
    text-align: left;
    margin: 2rem;
`;

export default () => {
    $("body").removeClass("bg");

    const [text, setText] = useState('');

    useEffect(() => {
        const readmePath = require("./POLICY.md");
        fetch(readmePath)
            .then(response => {
                return response.text()
            })
            .then(mdText => {
                setText(marked(mdText));
            });
    });

    return <StyledSection>
        <article dangerouslySetInnerHTML={{ __html: text }}></article>
    </StyledSection>
}