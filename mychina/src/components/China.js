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
            <div class="hgroup">
                <h1><strong>City Culture </strong><small> & </small><strong> Cultural History</strong></h1>
                <h2>&nbsp;&nbsp;-Learn more about Chinese city landscape and cultural history</h2>
                <ul class="breadcrumb pull-right">
                    <li><a href="home">Home</a> <span class="divider">/</span></li>
                    <li class="active">China</li>
                </ul>
            </div>
            <div id="portfolio_container" class="portfolio_masonry row">
                <div class="portfolio_item cat_just_photos span4"> <a href="xinjiang"> <img src={`${prefix}/images/portfolio/xinjiang00.jpeg`} alt="Xinjiang" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3><strong>Xinjiang</strong></h3>
                            <p>Learn more about Xinjiang culture</p>
                        </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_projects span4"> <a href="beijing"> <img src={`${prefix}/images/portfolio/china_beijing.jpeg`} alt="Beijing" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3><strong>Beijing</strong></h3>
                            <p>Learn more about Beijing culture</p>
                        </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_just_photos span4"> <a rel='prettyPhoto' href="images/portfolio/titian.jpeg"> <img src={`${prefix}/images/portfolio/titian.jpeg`} alt="Titian" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-resize-full"></i> </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_projects span4"> <a rel='prettyPhoto' href="images/portfolio/emeishan.jpeg"> <img src={`${prefix}/images/portfolio/emeishan.jpeg`} alt="Emeishan" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3>Sichuan</h3>
                            <p>Learn more about Emei Mountain of Sichuan province</p>
                        </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_just_photos span4"> <a rel='prettyPhoto' href="images/portfolio/xian01.jpeg"> <img src={`${prefix}/images/portfolio/xian01.jpeg`} alt="Xian" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3><strong>Xi'an</strong></h3>
                            <p>Learn more about Xian city culture</p>
                        </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_just_photos span4"> <a rel='prettyPhoto' href="images/portfolio/chakayanhu.jpeg"> <img src={`${prefix}/images/portfolio/chakayanhu.jpeg`} alt="Qinghai" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3><strong>Caka Salt Lake</strong></h3>
                            <p>Learn more about Caka Salt Lake of Qinghai city</p>
                        </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_just_photos span4"> <a rel='prettyPhoto' href="images/portfolio/xizang03.jpeg"> <img src={`${prefix}/images/portfolio/xizang03.jpeg`} alt="Xizang" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3><strong>Xizang</strong></h3>
                            <p>Learn more about Xizang culture</p>
                        </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_projects span4"> <a rel='prettyPhoto' href="images/portfolio/panda01.jpeg"> <img src={`${prefix}/images/portfolio/panda01.jpeg`} alt="panda" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-resize-full"></i> </div>
                    </div>
                </a></div>
                <div class="portfolio_item cat_just_photos span4"> <a rel='prettyPhoto' href="images/portfolio/2222.jpeg"> <img src={`${prefix}/images/portfolio/2222.jpeg`} alt="Gansu" />
                    <div class="overlay">
                        <div class="desc"> <i class="icon-2x icon-external-link"></i>
                            <h3><strong>Dunhuang Murals</strong></h3>
                        </div>
                    </div>
                </a></div>
            </div>
        </div>
    </div>
    </div>
        ;
}
class China extends React.Component {
    render() {
        return (
            <Page/>)
    }
}

export default China;
