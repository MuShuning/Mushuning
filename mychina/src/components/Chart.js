import React from 'react';
import rd3 from 'react-d3-library';

var prefix = 'http://localhost:3000/public';
var ScatterPlot = rd3.createScatterPlot;

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
        ;
}
const RD3Component = rd3.Component;
class Chart extends React.Component {
    getInitialState() {
        return {d3: ''}
    }


    render() {
        return (
            <div>
                <ScatterPlot/>
                <Page/>
            </div>)
    }
}

export default Chart;

