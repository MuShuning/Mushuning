import React from 'react';
import $ from 'jquery';
import SimpleImageSlider from "react-simple-image-slider";

window.jQuery = window.$ = $;

var prefix = 'http://localhost:3000/public';
let images = [
    { url: prefix + '/images/portfolio/item/beijing01.jpeg'},
    { url: prefix + '/images/portfolio/item/beijing02.jpeg'},
    { url: prefix + '/images/portfolio/item/beijing03.jpeg'},
    { url: prefix + '/images/portfolio/item/beijing04.jpeg' },
    { url: prefix + '/images/portfolio/item/beijing08.jpeg'},
    { url: prefix + '/images/portfolio/item/beijing06.jpeg' },
    { url: prefix + '/images/portfolio/item/beijing07.jpeg' },
    { url: prefix + '/images/portfolio/item/beijing09.jpeg' }
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
                            <li ><a href="home">Home</a></li>
                            <li className="active"><a href="china">China</a></li>
                            <li><a href="russia">Russia</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <div id="main">
        <div class="container">
            <section id="portfolio_item">
                <div class="hgroup">
                    <ul class="breadcrumb pull-left">
                        <li><a href="home">Home</a> <span class="divider">/</span></li>
                        <li><a href="china">China</a> <span class="divider">/</span></li>
                        <li class="active">Item I</li>
                    </ul>
                </div>
                <div class="row">
                    <div class="span8">
                        <section id="portfolio_slider_wrapper">
                            <div class="flexslider" id="portfolio_slider">
                                <SimpleImageSlider
                                    width={800}
                                    height={504}
                                    images={images}
                                    showBullets={true}
                                    showNavs={true}
                                />
                                <ul class="slides">
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing01.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing01.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing01.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing02.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing02.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing02.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing03.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing03.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing03.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing04.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing04.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing04.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing06.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing06.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing06.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing07.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing07.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing07.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing09.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing09.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing09.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                    <li class="item" data-thumb={`${prefix}/images/portfolio/item/beijing08.jpeg`} style={{backgroundImage: `url(${prefix}/images/portfolio/item/beijing08.jpeg)`}}>
                                        <div class="container"> <a href={`${prefix}/images/portfolio/item/beijing08.jpeg`} rel="prettyPhoto[gal]"></a></div>
                                    </li>
                                </ul>
                            </div>
                            <div id="carousel" class="flexslider">
                                <ul class="slides">
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing01.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing02.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing03.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing04.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing06.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing07.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing09.jpeg`} alt="" /> </li>
                                    <li> <img src={`${prefix}/images/portfolio/item/beijing08.jpeg`} alt="" /> </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div class="span4">
                        <article class="portfolio_details">
                            <h4 class="well"><strong>Beijing Humanities and Scenery</strong></h4>
                            <p class="well">Beijing is a national historical and cultural city with a history of three thousand years. Beijing was the capital of the Six Dynasties in history. In the 2000 years since the Kingdom of Yan, many magnificent palace buildings have been built, making Beijing the city with the largest number of imperial palaces, gardens, temples and tombs and the richest content in China. . The Forbidden City in Beijing has lived in 24 emperors. The building is magnificent and it perfectly embodies the traditional Chinese classical style and oriental style. It is an existing palace in China and the whole world, and a precious cultural heritage of the Chinese nation. The Temple of Heaven is famous at home and abroad for its reasonable layout and exquisite construction. </p>
                            <div class="well">
                                <p><strong>City Name:</strong>&nbsp;Beijing（北京）</p>
                                <p><strong>Location:</strong>&nbsp;&nbsp;North central</p>
                                <p><strong>Area:</strong>&nbsp;&nbsp;16,410 square kilometers </p>
                                <p><strong>Climate:</strong>&nbsp;&nbsp;continental monsoon climate</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <ul class="pager">
                <li class="previous disabled"><a href="china">← Older</a></li>
                <li class="next"><a href="xinjiang">Newer →</a></li>
            </ul>
        </div>
        <footer>
            <section id="footer_teasers_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="span4 footer_teaser">
                            <h3>About us</h3>
                            <p> Mu Shuning, ITMO University</p>
                            <p><i class="icon-map-marker"></i>  St.Petersburg</p>
                            <p><i class="icon-phone"></i> +7(931)xxxxxxx</p>
                            <p><i class="icon-envelope"></i> mushuningxxxx@123.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </div>
    </div>
    ;
}
class Beijing extends React.Component {



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

export default Beijing;
