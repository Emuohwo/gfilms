import React from "react";

export const Footer = () => (
  <footer className="site-footer" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h2 className="footer-headin mb-3">Contact Us</h2>
          <p>
            41, Kushimo street, Off Liasu road, Egbe, Ikotun, Lagos State, Nigeria.
          </p>
          <p>
            <a href="mailto:guzeefilms@gmail.com">guzeefilms@gmail.com</a>
          </p>
          <p>
            <a href="tel:+2348061556900">+2348061556900</a> <br/>
            <a href="tel:+2348020506679">+2348020506679</a> <br />
            <a href="tel:+2348056088820">+2348056088820</a>
          </p>
          {/* <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p> */}
        </div>
        <div className="col-lg-8 ml-auto">
          <div className="row">
            <div className="col-lg-6 ml-auto">
              <h2 className="footer-heading mb-4">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h2 className="footer-heading mb-4">We are social</h2>
              <p>
                <small><i>Get connected to us on socia media</i></small>
              </p>
              <div>
                <ul className="social-media">
                  <li>
                    <a href="https://chat.whatsapp.com/BTjbNTUSwy06yzu01ug0C6">
                      <span className="icon-whatsapp fa-2x"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://m.facebook.com/GUZEE-FILMS-891304044228286/">
                      <span className="icon-facebook fa-2x"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://m.youtube.com/channel/UCx3Z-PGADZYPNQNgP6bjvZQ">
                      <span className="icon-youtube"></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <form action="#" className="d-flex" className="subscribe">
                <input
                  type="text"
                  className="form-control mr-3"
                  placeholder="Email"
                />
                <input type="submit" value="Send" className="btn btn-primary" />
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-7">
          <div className=" pt-5">
            <p>
              Copyright &copy; GUZEE FILMS {new Date().getFullYear()} .
              All rights reserved
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className=" pt-5">
            <p>
              <a href="http://eloshines.com">Made at Eloshines</a> 
            </p>
          </div>
        </div>
      </div>
      <style jsx >
        {`
        .social-media{
          list-style: none;
          font-size: 200%;
        }
        .social-media li {
          display: inline-block;
          margin: 0.2rem 1rem;
        }
        .social-media li:first-child {
          margin-left: 0;
        }
        `}
      </style>
    </div>
  </footer>
);
