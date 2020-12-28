import React from "react";

export const AboutMe = () => (
  <div className="site-section bg-black about-me" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-5 mb-md-0">
          <img src="images/portfolio/guzee1.jpg" alt="Image" className="img-fluid" />
        </div>
        <div className="col-md-5 ml-auto">
          <h3 className="text-white mb-5">Profile of CEO/Founder of GUZEE FILMS</h3>
          {/* <blockquote className="quote-29281">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, perferendis iste vitae, culpa eveniet enim porro
              ratione. Maxime, eos repellendus natus. Esse modi necessitatibus
              nesciunt!
            </p>
          </blockquote> */}
          
          <p>
            The profile of the Founder/CEO of GUZEE FILMS are highlighted below:
          </p>
          <p>
          <ul>
            <li>A Television News Writer</li>
            <li>Script Writer</li>
            <li>Cinematographer</li>
            <li>Editor</li>
            <li>Music Video/Movie Director</li>
            <li>Producer</li>
            <li>Businessman, CEO/FOUNDER OF GUZEE FINANCE LTD</li>
            <li>And a MINISTER of the Gospel of Christ Jesus</li>
          </ul>
          </p>

          <div className="social_29128 white mt-5">
            <a href="https://www.facebook.com/GuzeeRaymond">
              <span className="icon-facebook"></span>
            </a>
            <a href="#">
              <span className="icon-instagram"></span>
            </a>
            <a href="#">
              <span className="icon-twitter"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
