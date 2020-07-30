
import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default function () {

    const StyledDiv = styled.div`
        width: 50%;
        margin-left: 25%;
        border: thin solid black;
    `;

    const ExtraMarginDiv = styled.div`
    margin: 2rem;
    `;

    return <StyledDiv>
        <ExtraMarginDiv>
            <div class="topline">
            </div>

            <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-inner">
                    <div class="container">
                        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                        <div class="nav-collapse collapse">

                            <ul class="nav leftmenu">

                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About me &amp; my work</a></li>
                            </ul>

                            <ul class="nav rightmenu">
                                <li><a href="portofolio.html">Portofolio &amp; projects</a></li>
                                <li class="lastmenu"><a href="contact.html" class="lastmenu">Contact</a></li>
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

            <div class="hero-unit">
                <h1>Welcome to the example website John Doe's portofolio!</h1>
                <p>
                    This leading paragraph helps you indentify yourself. Describe in a few words who you are and <i>what your main service is</i> to your visitors, potential customers. Hero unit is for greater impact. Carousel is optional.
                </p>
            </div>

            <div>
                <div class="span16">
                    <div id="myCarousel" class="carousel slide">
                        <div class="carousel-inner imglist">
                            <div class="item">
                                <div class="carousel-caption">
                                    <h4>First Thumbnail label</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>

                            <div class="item active">
                                <img src="img/slider/2.jpg" alt="" />
                                <div class="carousel-caption">
                                    <h4>Second Thumbnail label</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>

                            <div class="item">
                                <img src="img/slider/3.jpg" alt="" />
                                <div class="carousel-caption">
                                    <h4>Third Thumbnail label</h4>
                                    <p>
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
                    <h3>Professional</h3>
                    <p>
                        Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
    </p>
                    <p>
                        <a class="btn" href="about.html">More about me</a>
                    </p>
                </div>

                <div class="span-one-third">
                    <h3>Aesthetic</h3>
                    <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen.
    </p>
                    <p>
                    </p>
                </div>

                <div class="span-one-third">
                    <h3>Responsive</h3>
                    <p>
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
                            <i>Some nice words about you. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</i>
                        </div>
                        <div class="span-one-third">
                            <div class="centermargin">
                                <div class="facebook">
                                    <a href="#"></a>
                                </div>
                                <div class="twitter">
                                    <a href="#"></a>
                                </div>
                                <div class="google">
                                    <a href="#"></a>
                                </div>
                                <div class="flickr">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footerend">
            </div>

            <div id="pouch-root"></div><br />
            <Button variant="success" onClick={() => { window.location = "mailto:xyz@abc.com"; }}>Send me an email</Button>
        </ExtraMarginDiv>
    </StyledDiv>
}

