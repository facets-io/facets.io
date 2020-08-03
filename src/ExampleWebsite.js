
import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default function () {

    const StyledDiv = styled.div`
        width: 50%;
        border: thin solid black;
    `;

    const ExtraMarginDiv = styled.div`
    margin: 2rem;
    `;

    const myFunc = () => { window.location = "mailto:xyz@abc.com"; };

    return <StyledDiv>
        <ExtraMarginDiv>
            <div>
                <div id='navbar-inner' class="navbar-inner">
                    <div id='container' class="container">
                        <div id='nav-collapse' class="nav-collapse collapse">

                            <ul class="nav leftmenu">

                                <li id='index'><a href="index.html">Home</a></li>
                                <li id='about'><a href="about.html">About me &amp; my work</a></li>
                            </ul>

                            <ul id='rightmenu' class="nav rightmenu">
                                <li id='portofolio'><a href="portofolio.html">Portofolio &amp; projects</a></li>
                                <li id='lastmenu' class="lastmenu"><a href="contact.html" class="lastmenu">Contact</a></li>
                            </ul>

                            <div id="myModal" class="modal hide fade hide" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                                    <h3 id="myModalLabel">Send me a note</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="done">
                                        <div class="alert alert-success">
                                            <button type="button" class="close" data-dismiss="alert">x</button>
                                            <strong>Message sent successfully!</strong><br />
                                        </div>
                                    </div>
                                    <div class="form">
                                        <form method="post" action="process.php" id="contactform">
                                            <table>
                                                <tbody>
                                                    <tr class="element">
                                                        <td class="noborder">
                                                        </td>
                                                        <td class="noborder">
                                                            <input type="text" name="name" class="text input-xlarge" placeholder="Name" />
                                                        </td>
                                                    </tr>
                                                    <tr class="element">
                                                        <td class="noborder">
                                                        </td>
                                                        <td class="noborder">
                                                            <input type="text" name="email" class="text input-xlarge" placeholder="E-mail address" />
                                                        </td>
                                                    </tr>
                                                    <tr class="element texttop">
                                                        <td class="noborder">
                                                        </td>
                                                        <td class="noborder">
                                                            <textarea name="comment" class="text textarea input-xlarge contactarea" placeholder="Project details, requirements, budget"></textarea>
                                                        </td>
                                                    </tr>
                                                    <tr class="element">
                                                        <td class="noborder">
                                                            &nbsp;
                                        </td>
                                                        <td class="noborder">
                                                            <input type="submit" id="submit" class="btn" value="Submit" />
                                                            <div class="loading">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container"></div>

            <div id='welcome' class="hero-unit">
                <h1 id='welcome'>Welcome to the example website John Doe's portofolio!</h1>
                <p id='landing'>
                    This leading paragraph helps you indentify yourself. Describe in a few words who you are and <i id='landing1'>what your main service is</i> to your visitors, potential customers. Hero unit is for greater impact. Carousel is optional.
                </p>
            </div>

            <div>
                <div id="span16" class="span16">
                    <div id="myCarousel" class="carousel slide">
                        <div id="carousel-inner" class="carousel-inner imglist">
                            <div class="item">
                                <div class="carousel-caption">
                                    <h4 id='firstthumb'>First Thumbnail label</h4>
                                    <p id='pfirstthumb'>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>

                            <div class="item active">
                                <div class="carousel-caption">
                                    <h4 id='secondthumb'> Second Thumbnail label</h4>
                                    <p id='psecondthumb'>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="carousel-caption">
                                    <h4 id='thirdthumb'>Third Thumbnail label</h4>
                                    <p id='pthirdthumb'>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>

                <div class="span-one-third">
                    <h3 id='professional'>Professional</h3>
                    <p id='pprofessional'>
                        Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
    </p>
                    <p id='btn1'>
                        <a id='btn11'>More about me</a>
                    </p>
                </div>

                <div class="span-one-third">
                    <h3 id='Aesthetic'>Aesthetic</h3>
                    <p id='pAesthetic'>
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen.
    </p>
                    <p>
                    </p>
                </div>

                <div class="span-one-third">
                    <h3 id="responsive">Responsive</h3>
                    <p id="presponsive">
                        Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis.
    </p>
                </div>
            </div>

            <div class="footerli">
            </div>
            <div class="tweetarea">
                <div class="tweettext">
                    <div>
                        <div class="span-one-third">
                            <i id="somewords">Some nice words about you. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footerend">
            </div>

            <div id="pouch-root"></div><br />
            <Button id="btn" variant="success" >Send me an email</Button>
        </ExtraMarginDiv>
    </StyledDiv>
}

