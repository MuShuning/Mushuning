import React from 'react';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import SimpleImageSlider from "react-simple-image-slider";

import {Navbar,NavbarBrand,NavbarToggler,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,Nav,Collapse} from 'reactstrap';
var prefix = 'http://localhost:3000/public';
let images = [
    { url: prefix + '/images/2.jpg'},
    { url: prefix + '/images/3.jpg'},
    { url: prefix + '/images/4.jpg'},

];

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
        <audio controls>
        <source src =  {`${prefix}/chinese.mp3`} type="audio/mpeg" />
            Your browser does not support the audio element
    </audio>
    <div className='nav'><div className='title_bell'></div>
        <div className='footer_bell'></div>
        <div className="container">

            <div className="navbar">

                <div className="navbar-inner"><a className="brand" href="home"> <img src= {`${prefix}/images/logo.png`} width="90"
                                                                                           height="90" alt="optional logo"/>
                    <span className="logo_title"><strong>&nbsp;Journey</strong></span> <span
                        className="logo_subtitle">&nbsp;- city cultural memory</span> </a> <a className="btn btn-navbar"
                                                                                              data-toggle="collapse"
                                                                                              data-target=".nav-collapse"><span
                    className="nb_left pull-left"> <span className="icon-bar"></span> <span
                    className="icon-bar"></span> <span className="icon-bar"></span></span> <span
                    className="nb_right pull-right">menu</span> </a>
                    <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li className="active"><a href="home">Home</a></li>
                            <li><a href="china">China</a></li>
                            <li><a href="russia">Russia</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section id="slider_wrapper">
        <center>
        <SimpleImageSlider
                                    width={1000}
                                    height={504}
                                    images={images}
                                    showBullets={true}
                                    showNavs={true}
                                />
                            
</center>
    </section>
<div className="copyrights">Collect from <a href="#" title="Journey"></a></div>
<div id="main">
    <div className="container">
        <section id="features_teasers_wrapper">
            <div className="row">
                <div className="span4 feature_teaser"><a href="china"><img alt="responsive"
                                                                                src={`${prefix}/images/index01.png`}/></a>
                    <p><br/></p>
                    <h4>Chinese Traditional Elements</h4>
                    <p>Guqin, chess, calligraphy and Chinese painting<br/><br/><br/></p>

                </div>
                <div className="span4 feature_teaser"><a href="#"><img alt="responsive" src={`${prefix}/images/index02.png`}/></a>
                    <p><br/></p>
                    <h4>Chinese Traditional Festival</h4>
                    <p>Four traditional festivals and local cultural customs</p>
                </div>
                <div className="span4 feature_teaser"><a href="#"><img alt="responsive" src={`${prefix}/images/index03.png`}/></a>
                    <p><br/></p>
                    <h4>Chinese Religious Culture</h4>
                    <p>Buddhism, Taoism, Tibetan Buddhist culture...</p>
                </div>
            </div>
        </section>
        <section id="portfolio_teasers_wrapper">
            <h2 className="section_header">Description of Representative Cities</h2>
            <div className="portfolio_strict row">
                <div className="portfolio_item span3">
                    <div className="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/beijing01.jpg)`}}><a
                        href="beijing"> <i className="icon-2x icon-external-link"></i>
                        <p>Introduce the humanities and scenery of Beijing</p>
                    </a></div>
                    <div className="portfolio_description">
                        <h3><a href="beijing">Beijing （北京）</a></h3>
                        <p>the Capital of China</p>
                    </div>
                </div>
                <div className="portfolio_item span3">
                    <div className="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/xinjiang01.jpg)`}}><a
                        href="xinjiang"> <i className="icon-2x icon-external-link"></i>
                        <p>Introduce the humanities and scenery of Xinjiang</p>
                    </a></div>
                    <div className="portfolio_description">
                        <h3><a href="xinjiang">Xinjiang （新疆）</a></h3>
                        <p>Northwest China province</p>
                    </div>
                </div>
                <div className="portfolio_item span3">
                    <div className="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/moscow.jpeg)`}}><a
                        href="xinjiang"> <i className="icon-2x icon-external-link"></i>
                        <p>Introduce the humanities and scenery of Moscow</p>
                    </a></div>
                    <div className="portfolio_description">
                        <h3><a href="＃">Moscow</a></h3>
                        <p>the Capital of Russia</p>
                    </div>
                </div>
                <div className="portfolio_item span3">
                    <div className="portfolio_photo" style={{backgroundImage:`url(${prefix}/images/portfolio/st01.jpeg)`}}><a
                        href="xinjiang"> <i className="icon-2x icon-external-link"></i>
                        <p>Introduce the humanities and scenery of St.Petersburg</p>
                    </a></div>
                    <div className="portfolio_description">
                        <h3><a href="＃">St.Petersburg</a></h3>
                        <p>Rich cultural city</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <footer>
        <section id="footer_teasers_wrapper">
            <div className="container">
            <center>
                <div className="row">
                    
                    <div className="span4 footer_teaser">
                        <h3>About us</h3>
                        <p> Mu Shuning, ITMO University</p>
                        <p><i className="icon-map-marker"></i> St.Petersburg</p>
                        <p><i className="icon-phone"></i> +7(931)xxxxxxx</p>
                        <p><i className="icon-envelope"></i> mushuningxxxx@123.com</p>
                    </div>
                    
                </div>
                </center>
            </div>
        </section>
    </footer>
</div>


</div>
    ;
}
    class Home extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isOpen: false
            };

            this.toggle = this.toggle.bind(this);
        }

        toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    render() {
        return (
            <div>

        <Page/>
            </div>)
    }
}

export default Home;
