import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import '@fortawesome/fontawesome-free/css/all.css'

/*
 * This component is used to create footer
 */
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark footer">
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-md-3 col-lg-4">
              <div className="row">
                <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                  <h2 className="footer-heading"><a href="#" className="logo">Uxbert.com</a></h2>
                  <p className="aside-text">We are a group of digital craftsmen with international expertise dedicated to helping your business grow and engineering beautiful experiences.</p>
                  <a href="#">read more <span className="ion-ios-arrow-round-forward"></span></a>
                </div>
              </div>

              <div className="row d-flex justify-content-start social-plt">
                
                <i className="fa-brands fa-behance"></i>
                <i className="fa-brands fa-dribbble"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-rss"></i>
                <i className="fa-brands fa-twitter"></i>

              </div>

            </div>
            <div className="col-md-9 col-lg-8">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <div className="section-text">
                      
                      <img src="http://uxbert.com/wp-content/uploads/2014/11/saudi-flag1.png"/><br/>
                      UXBERT Labs<br/>
                      7424 Takhassusi St. 12314<br/>
                      1st Floor, Offices 101 to 105 
                      Riyadh, Saudi Arabia <br/>
                      Email: <Link href="mailto:hello@uxbert.com">hello@uxbert.com</Link><br/>
                      Phone: <Link href="tel:+966566261199">+966 56 626 1199 </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <div className="section-text"><img src="http://uxbert.com/wp-content/uploads/2015/02/british-flag.png"/><br/>
                    UXBERT Limited<br/>
                      6 Hadley Court, 223 Ballards Lane, London, N3 1NB<br/> United Kingdom<br/>
                        Email: <Link href="mailto:hello@uxbert.com">hello@uxbert.com</Link>
                        <br/>
                        </div>
                </div>
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <div className="section-text"><img src="http://uxbert.com/wp-content/uploads/2017/05/uae-flag.png" /><br />
                    UXBERT Labs<br />
                    Dubai, United Arab Emirates<br />
                    Email: <Link href="mailto:hello@uxbert.com">hello@uxbert.com</Link><br />
                    Phone: <Link href="tel:+966547628464">+966 54 762 8464</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 col-lg-12">
              <p className="copy-right-text text-center">
                Copyright © 2022 ALL RIGHTS RESERVED. ALL LEFTS REVERSED
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
      
  );
}

export default Footer;