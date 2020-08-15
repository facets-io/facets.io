
import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import AppContext from './AppContext';

export default function () {

    const StyledDiv = styled.div`
        border: thin solid black;
    `;

    const ExtraMarginDiv = styled.div`
        margin: 1rem;
    `;

    const { isAddingFacet, addedFacets, setAddedElements, newlyAddedFacet, setNewlyAddedFacet,
        addedElements, setCanDeleteElement } = useContext(AppContext);

    useEffect(() => {
        //   console.log('RUNNING SCRIPT')
        //   var iframe = document.getElementById("fixed-container");
        //   var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        //   innerDoc.querySelectorAll('*').forEach(e => {
        //     e.addEventListener("mouseenter", function (event) {
        //       // highlight the mouseenter target
        //       $(this).css('border', '1px solid black');
        //       $(this).css('cursor', 'pointer');
        //       event.preventDefault();
        //       event.stopPropagation();

        //       // reset the color after a short delay
        //       setTimeout(function () {
        //         event.target.style.color = "purple";
        //       }, 500);
        //     }, false);
        //     e.addEventListener("mouseleave", function (event) {
        //       // highlight the mouseenter target
        //       $(this).css('border', 'none');
        //       event.preventDefault();
        //       event.stopPropagation();
        //     }, false);
        //     e.addEventListener("click", function (event) {
        //       console.log('@CLICK', event)
        //       if (!event.target.id) return;
        //       window.selectedDOM = event.target.id;
        //       console.log('selectedDOM: ', window.selectedDOM);
        //       onAddElement();
        //     }, false);
        //   });

        // $('#fixed-container *').hover(
        //     function (e) {
        //         $(this).css('border', '1px solid black');
        //         $(this).css('cursor', 'pointer');
        //         e.preventDefault();
        //         e.stopPropagation();
        //         return false;
        //     }, function (e) {
        //         $(this).css('border', 'none');
        //         e.preventDefault();
        //         e.stopPropagation();
        //         return false;
        //     }
        // ).click((e) => {
        //     if (!e.target.id) return;
        //     window.selectedDOM = e.target.id;

        //     onAddElement();
        // })

        // // this triggers 4x times everytime TODO fix
        // const onAddElement = () => {

        //     let oldVals = addedElements.get(newlyAddedFacet);

        //     if (!oldVals || oldVals.length === 0) {
        //         oldVals = [];
        //     }
        //     if (oldVals.includes(window.selectedDOM)) {
        //         // enqueueSnackbar(`Element "${window.selectedDOM}" has already been added in the "${newlyAddedFacet}".`, { variant: "error" });
        //         return false;
        //     }
        //     const newVals = [...oldVals, window.selectedDOM];
        //     const newMap = new Map(addedElements);
        //     newMap.set(newlyAddedFacet, newVals);
        //     console.log('NEWMAP', newMap);
        //     setAddedElements(newMap);
        //     // enqueueSnackbar(`Added Element "${window.selectedDOM}" in the "${newlyAddedFacet}"!`, { variant: "success" });
        // }
    }, [addedElements, newlyAddedFacet, setAddedElements, setCanDeleteElement]);

    return <div id='fixed-container'><StyledDiv id='main'>
        <ExtraMarginDiv id='main2'>
            <div id='main3'>
                <div id='navbar-inner' className="navbar-inner">
                    <div id='container' className="container">
                        <div id='nav-collapse' className="nav-collapse collapse">

                            <ul className="nav leftmenu">

                                <li id='index'><a href="index.html">Home</a></li>
                                <li id='about'><a href="about.html">About me &amp; my work</a></li>
                            </ul>

                            <ul id='rightmenu' className="nav rightmenu">
                                <li id='portofolio'><a href="portofolio.html">Portofolio &amp; projects</a></li>
                                <li id='lastmenu' className="lastmenu"><a href="contact.html" className="lastmenu">Contact</a></li>
                            </ul>

                            <div id="myModal" className="modal hide fade hide" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
                                    <h3 id="myModalLabel">Send me a note</h3>
                                </div>
                                <div className="modal-body">
                                    <div className="done">
                                        <div className="alert alert-success">
                                            <button type="button" className="close" data-dismiss="alert">x</button>
                                            <strong>Message sent successfully!</strong><br />
                                        </div>
                                    </div>
                                    <div className="form">
                                        <form method="post" action="process.php" id="contactform">
                                            <table>
                                                <tbody>
                                                    <tr className="element">
                                                        <td className="noborder">
                                                        </td>
                                                        <td className="noborder">
                                                            <input type="text" name="name" className="text input-xlarge" placeholder="Name" />
                                                        </td>
                                                    </tr>
                                                    <tr className="element">
                                                        <td className="noborder">
                                                        </td>
                                                        <td className="noborder">
                                                            <input type="text" name="email" className="text input-xlarge" placeholder="E-mail address" />
                                                        </td>
                                                    </tr>
                                                    <tr className="element texttop">
                                                        <td className="noborder">
                                                        </td>
                                                        <td className="noborder">
                                                            <textarea name="comment" className="text textarea input-xlarge contactarea" placeholder="Project details, requirements, budget"></textarea>
                                                        </td>
                                                    </tr>
                                                    <tr className="element">
                                                        <td className="noborder">
                                                            &nbsp;
                                        </td>
                                                        <td className="noborder">
                                                            <input type="submit" id="submit" className="btn" value="Submit" />
                                                            <div className="loading">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container"></div>

            <div id='welcome' className="hero-unit">
                <h1 id='welcome'>Welcome to the example website John Doe's portofolio!</h1>
                <p id='landing'>
                    This leading paragraph helps you indentify yourself. Describe in a few words who you are and <i id='landing1'>what your main service is</i> to your visitors, potential customers. Hero unit is for greater impact. Carousel is optional.
                </p>
            </div>

            <div>
                <div id="span16" className="span16">
                    <div id="myCarousel" className="carousel slide">
                        <div id="carousel-inner" className="carousel-inner imglist">
                            <div className="item">
                                <div className="carousel-caption">
                                    <h4 id='firstthumb'>First Thumbnail label</h4>
                                    <p id='pfirstthumb'>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>

                            <div className="item active">
                                <div className="carousel-caption">
                                    <h4 id='secondthumb'> Second Thumbnail label</h4>
                                    <p id='psecondthumb'>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="carousel-caption">
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

                <div className="span-one-third">
                    <h3 id='professional'>Professional</h3>
                    <p id='pprofessional'>
                        Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
    </p>
                    <p id='btn1'>
                        <a id='btn11'>More about me</a>
                    </p>
                </div>

                <div className="span-one-third">
                    <h3 id='Aesthetic'>Aesthetic</h3>
                    <p id='pAesthetic'>
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen.
    </p>
                    <p>
                    </p>
                </div>

                <h3 id="responsive">Responsive</h3>
                <p id="presponsive">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis.
    </p>
            </div>


            <div id="somewords" className="tweetarea">
                <div id="somewords1" className="tweettext">
                    <div id="somewords11" className="span-one-third">
                        <i id="somewords111">Some nice words about you. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</i>
                    </div>
                </div>
            </div>
            <br />
            <button id="btn">Send me an email</button>
        </ExtraMarginDiv>
    </StyledDiv>
    </div>
}

