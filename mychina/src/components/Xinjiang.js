import React from 'react';
import $ from 'jquery';
import SimpleImageSlider from "react-simple-image-slider";

window.jQuery = window.$ = $;

var prefix = 'http://localhost:3000/public';
let images = [
    { url: prefix + '/images/portfolio/item/xinjiang1.jpeg'},
    { url: prefix + '/images/portfolio/item/xinjiang2.jpeg'},
    { url: prefix + '/images/portfolio/item/xinjiang4.jpeg'},
    { url: prefix + '/images/portfolio/item/xinjiang3.jpeg' },
    { url: prefix + '/images/portfolio/item/xinjiang5.jpeg'},
    { url: prefix + '/images/portfolio/item/xinjiang6.jpeg' },
    { url: prefix + '/images/portfolio/item/xinjiang7.jpeg' },
    { url: prefix + '/images/portfolio/item/xinjiang8.jpeg' }
];


function Page() {
    return <div>
        <meta charSet="utf-8"/>
        <title>My China</title>


        <script src={`${prefix}/twitter-bootstrap/js/bootstrap.min.js`} type="text/javascript"></script>
        <script type="text/javascript" src={`${prefix}/js/modernizr.custom.48287.js`}></script>
        <script src={`${prefix}/js/woothemes-FlexSlider-06b12f8/jquery.flexslider-min.js`}></script>
        <script src={`${prefix}/js/prettyPhoto_3.1.5/jquery.prettyPhoto.js`} type="text/javascript" charSet="utf-8"></script>
        <script src={`${prefix}/js/isotope/jquery.isotope.min.js`} type="text/javascript"></script>
        <script type="text/javascript" src={`${prefix}/js/jquery.ui.totop.js`}></script>
        <script type="text/javascript" src={`${prefix}/js/easing.js`}></script>
        <script type="text/javascript" src={`${prefix}js/restart_theme.js`}></script>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href={`${prefix}/less/animate.less-master/animate.css`} rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href={`${prefix}/js/woothemes-FlexSlider-06b12f8/flexslider.css`} type="text/css"
              media="screen"/>
        <link rel="stylesheet" href={`${prefix}/js/prettyPhoto_3.1.5/prettyPhoto.css`} type="text/css" media="screen"/>

        <link rel="stylesheet" href={`${prefix}/fonts/font-awesome/css/font-awesome.min.css`} media="screen"/>
        <script type="text/javascript" src={`${prefix}/js/modernizr.custom.48287.js`}></script>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href={`${prefix}/style.css`} rel="stylesheet" type="text/css"/>
        <div className="audio_chinese">
            <audio controls>
                <source src="chinese.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
        <div className ='title_bell'></div>
        <div className ='footer_bell'></div>
        <div className="container">
            <div className="navbar">

                <div className="navbar-inner"> <a class="brand" href="index.html"> <img src={`${prefix}/images/logo.png`} width="90" height="90" alt="optional logo" /> <span class="logo_title"><strong>&nbsp;Journey</strong></span> <span class="logo_subtitle">&nbsp;- city cultural memory</span> </a> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="nb_left pull-left"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></span> <span class="nb_right pull-right">menu</span> </a>
                    <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li><a href="home">Home</a></li>
                            <li className="active"><a href="china">China</a></li>
                            <li><a href="russia">Russia</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="main">
            <div className="container">
                <section id="portfolio_item">
                    <div className="hgroup">
                        <h1>Xinjiang Province</h1>
                        <h2>Introduce the humanities and scenery of Xinjiang</h2>
                        <ul className="breadcrumb pull-right">
                            <li><a href="home">Home</a> <span className="divider">/</span></li>
                            <li><a href="china">China</a> <span className="divider">/</span></li>
                            <li className="active">Item II</li>
                        </ul>
                    </div>

                    <section id="portfolio_slider_wrapper">
                        <div className="flexslider" id="portfolio_slider">
                            <SimpleImageSlider
                                width={800}
                                height={504}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />

                        </div>
                        <div id="carousel" className="flexslider">
                            <ul className="slides">
                                <li><img src="images/portfolio/item/xinjiang1.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang9.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang3.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang4.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang5.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang6.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang7.jpeg" alt=""/></li>
                                <li><img src="images/portfolio/item/xinjiang8.jpeg" alt=""/></li>
                            </ul>
                        </div>
                    </section>
                    <article>
                        <div className="row">
                            <div className="span9">
                                <p className="well">Xinjiang has accounted for one-sixth of the country’s land area,
                                    people stepped here, it will be the magic extensive, attracted to the beautiful and
                                    fertile. Believe in a matter of days tour of Xinjiang Celebration of history,
                                    culture, magnificent all colorful ethnic customs, mysterious wonders of the natural
                                    landscape, rare and rare trace left of the monuments, rich natural resources and
                                    fertile resources will let you astonished.<br/>
                                    Vast land nurtured a profound history and culture. Xinjiang in ancient times known
                                    as the "Western Regions", as early as the Neolithic Age have on the residents.
                                    the one of famous culture is "Silk Road", forming a communication between China and
                                    Central Asia, South Asia and the European commercial channel. Along this Road, the
                                    ancient Chinese exquisite handicrafts, and precious ingredients for gunpowder
                                    refining, Papermaking, When printing of the Western European and Asian countries as
                                    well as a product of Buddhism, Christianity, Islam and its culture and art into
                                    China. Circulation in this passage of goods, the most valuable and most
                                    representative of that is exquisitely beautiful Chinese silk.
                                    <br/>Silk Road as a bond of friendship, and the ancient culture in the Yellow River
                                    basin, the Ganges River valley culture, Ancient Greek culture and Persian culture
                                    linked, became one of the most famous ancient "trade exchanges, Culture
                                    Communication road.
                                </p>
                            </div>
                            <div className="span3 well border-box">
                                <p><strong>Province Name:</strong> Xinjiang （新疆）</p>
                                <p><strong>Location:</strong> Northwest</p>
                                <p><strong>Area:</strong> 1.66 million square kilometers</p>
                                <p><strong>Climate:</strong> temperate continental climate</p>
                            </div>
                        </div>
                    </article>
                    <ul className="pager">
                        <li className="previous disabled"><a href="china">← Older</a></li>
                        <li className="next"><a href="beijing">Newer →</a></li>
                    </ul>
                </section>
            </div>
            <footer>
                <section id="footer_teasers_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="span4 footer_teaser">
                                <h3>About us</h3>
                                <p> Mu Shuning, ITMO University</p>
                                <p><i className="icon-map-marker"></i> St.Petersburg</p>
                                <p><i className="icon-phone"></i> +7(931)xxxxxxx</p>
                                <p><i className="icon-envelope"></i> mushuningxxxx@123.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    </div>
        ;
}
class Xinjiang extends React.Component {



    render() {
        return (
            <div><script type="text/javascript" src={`${prefix}/js/jquery-latest.min.js`}></script>
                <script>window.jQuery || document.write('
                    <script src={`${prefix}/js/jquery-1.9.0.min.js`}></script>')
                </script>
                <script src={`${prefix}/twitter-bootstrap/js/bootstrap.min.js`} type="text/javascript"></script>
                <script type="text/javascript" src={`${prefix}/js/modernizr.custom.48287.js`}></script>
                <script src={`${prefix}/js/woothemes-FlexSlider-06b12f8/jquery.flexslider-min.js`}></script>
                <script src={`${prefix}/js/prettyPhoto_3.1.5/jquery.prettyPhoto.js`} type="text/javascript" charSet="utf-8"></script>
                <script src={`${prefix}/js/isotope/jquery.isotope.min.js`} type="text/javascript"></script>
                <script type="text/javascript" src={`${prefix}/js/jquery.ui.totop.js`}></script>
                <script type="text/javascript" src={`${prefix}/js/easing.js`}></script>
                <script type="text/javascript" src={`${prefix}js/restart_theme.js`}></script>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href={`${prefix}/less/animate.less-master/animate.css`} rel="stylesheet" type="text/css"/>
                <link rel="stylesheet" href={`${prefix}/js/woothemes-FlexSlider-06b12f8/flexslider.css`} type="text/css"
                      media="screen"/>
                <link rel="stylesheet" href={`${prefix}/js/prettyPhoto_3.1.5/prettyPhoto.css`} type="text/css" media="screen"/>

                <link rel="stylesheet" href={`${prefix}/fonts/font-awesome/css/font-awesome.min.css`} media="screen"/>
                <script type="text/javascript" src={`${prefix}/js/modernizr.custom.48287.js`}></script>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <link href={`${prefix}/style.css`} rel="stylesheet" type="text/css"/>
            </div>,
                <Page/>)
    }
}

export default Xinjiang;
