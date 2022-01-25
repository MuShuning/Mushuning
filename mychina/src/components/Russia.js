import React from 'react';

var prefix = 'http://localhost:3000/public';
function Page() {
    return <div>
        <meta charSet="utf-8"/>
        <title>My China</title>

        <script type="text/javascript" src={`${prefix}/js/jquery-latest.min.js`}></script>
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
        <div class="audio_chinese">
            <audio controls>
                <source src="chinese.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
        <div class ='title_bell'></div>
        <div class ='footer_bell'></div>
        <div class="container">
            <div class="navbar">
                <div class="navbar-inner"> <a class="brand" href="home"> <img src={`${prefix}/images/logo.png`} width="90" height="90" alt="optional logo" /> <span class="logo_title"><strong>&nbsp;Journey</strong></span> <span class="logo_subtitle">&nbsp;- city cultural memory</span> </a> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="nb_left pull-left"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></span> <span class="nb_right pull-right">menu</span> </a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li><a href="home">Home</a></li>
                            <li><a href="china">China</a></li>
                            <li class="active"><a href="russia">Russia</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="main">
            <div class="container">
                <div className="hgroup">
                    <h1>Russian cultural cities</h1>
                    <h2>This is an introduction to cities with a strong cultural heritage in Russia. Not only
                        include<strong> famous cultural attractions</strong>, but also cultural history introduction.
                        </h2>
                    <ul className="breadcrumb pull-right">
                        <li><a href="home">Home</a> <span className="divider">/</span></li>
                        <li className="active">Russia</li>
                    </ul>
                </div>
                <div id="portfolio_container" class="portfolio_strict row">
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru01.jpeg)`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about St.Petersburg</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">St.Petersburg</a></h3>
                            <p>winner</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru16.jpeg)`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about Moscow</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">Moscow</a></h3>
                            <p>Capital</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru03.jpeg)`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about Russian art</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">Ballet</a></h3>
                            <p>Art</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru02.jpeg)`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about the palace</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">Peter the Great's Summer Palace</a></h3>
                            <p>Palace</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru06.jpeg)`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about Russian decoration</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">Interior decoration</a></h3>
                            <p>Museum</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru07.jpeg`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about aurora</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">Aurora</a></h3>
                            <p>North city of Russia</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru08.jpeg)`}}> <a href="#"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about Russian church</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="#">Спас на Крови</a></h3>
                            <p>Church</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru11.jpeg)`}}> <a href="xinjiang"> <i class="icon-2x icon-external-link"></i>
                            <p>Learn more about the life of Russian children</p>
                        </a></div>
                        <div class="portfolio_description">
                            <h3><a href="＃">Child</a></h3>
                            <p>Russia</p>
                        </div>
                    </div>
                    <div class="portfolio_item span4">
                        <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru12.jpeg)`}}> <a href="＃"> <i class="icon-2x icon-external-link"></i>
                        <p>Learn more about Russian music culture</p>
                        </a></div>
                    <div class="portfolio_description">
                        <h3><a href="＃">Concert</a></h3>
                        <p>Art</p>
                    </div>
                </div>
                <div class="portfolio_item span4">
                    <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru14.jpeg)`}}> <a href="＃"> <i class="icon-2x icon-external-link"></i>
                        <p>Learn more about the natural wonders of Lake Baikal</p>
                    </a></div>
                    <div class="portfolio_description">
                        <h3><a href="＃">Lake Baikal</a></h3>
                        <p>Lake</p>
                    </div>
                </div>
                <div class="portfolio_item span4">
                    <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru05.jpeg)`}}> <a href="＃"> <i class="icon-2x icon-external-link"></i>
                        <p>Learn more about the scenery of autumn in Russia</p>
                    </a></div>
                    <div class="portfolio_description">
                        <h3><a href="＃">Autumn</a></h3>
                        <p>St.Petersburg</p>
                    </div>
                </div>
                <div class="portfolio_item span4">
                    <div class="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/ru18.JPG)`}}> <a href="＃"> <i class="icon-2x icon-external-link"></i>
                        <p>Learn more about one of the four famous museums in the world</p>
                    </a></div>
                    <div class="portfolio_description">
                        <h3><a href="＃">Winter Palace</a></h3>
                        <p>Museum</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        ;
}
class Russia extends React.Component {
    render() {
        return (
            <Page/>)
    }
}

export default Russia;
