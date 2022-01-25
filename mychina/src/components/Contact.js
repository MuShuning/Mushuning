import React from 'react';

var prefix = 'http://localhost:3000/public';
var prefix_comments = 'http://localhost:3000';
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
            <div class="container">
                <div class="navbar">
                    <div class="navbar-inner"> <a class="brand" href="home"> <img src={`${prefix}/images/logo.png`} width="90" height="90" alt="optional logo" /> <span class="logo_title"><strong>&nbsp;Journey</strong></span> <span class="logo_subtitle">&nbsp;- city cultural memory</span> </a> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="nb_left pull-left"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></span> <span class="nb_right pull-right">menu</span> </a>
                        <div class="nav-collapse collapse">
                            <ul class="nav pull-right">
                                <li><a href="home">Home</a></li>
                                <li><a href="china">China</a></li>
                                <li><a href="russia">Russia</a></li>
                                <li class="active"><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    <div className="full_page_photo">
        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511624.1857452301!2d29.532887706196558!3d59.93990799797076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z5Zyj5b285b6X5aCh!5e0!3m2!1szh-CN!2sru!4v1636900835456!5m2!1szh-CN!2sru" ></iframe>
    </div>
    <div id="main">
        <div class="container">
            <section id="contact">
                <div class="hgroup">
                    <h1>Contact us</h1>
                    <ul class="breadcrumb pull-right">
                        <li><a href="home">Home</a> <span class="divider">/</span></li>
                        <li class="active">Contact</li>
                    </ul>
                </div>
                <div class="row">
                    <div class="span4 office_address">
                        <address>
                            <strong>ITMO Uni.</strong><br />
                            49 Kronverksky Ave.<br />
                            St.Petersburg, 197101<br />
                            Russia<br />
                            <abbr title="Phone">P:</abbr> +7 (812) 232-97-04
                        </address>
                        <address>
                            <strong>Email</strong><br />
                            <a href="mailto:#">xxxxx.com</a>
                        </address>
                    </div>
                    <div class="span8 contact_form">
                        <form action={`${prefix_comments}/comments`} method="post">
                            <div class="row">
                                <div class="span4">
                                    <label>Name</label>
                                    <input name='Name' type="text" minlength="2"  class="span4" required />
                                </div>
                                <div class="span4">
                                    <label>E-mail</label>
                                    <input name ='Email' type="email" class="span4" required />
                                </div>
                                <div class="span8">
                                    <label>Subject</label>
                                    <input name='Subject' type="text" class="span8" required/>
                                </div>
                                <div class="span8">
                                    <label>Message</label>
                                    <textarea rows="8" minlength="4"  name="Message" class="span8" required></textarea>
                                </div>
                                <div class="span8"> <input type="submit" class="btn btn-large btn-success" value="Submit Message"></input> </div>

                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            </div>
                        </form>
                    </div>
                </div>

    </section>
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
    </div>;
}
class Contact extends React.Component {
    render() {
        return (
            <Page/>)
    }
}

export default Contact;
