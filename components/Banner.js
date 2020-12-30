import React from "react";

export const Banner = ({children, ...rest}) => (
  <div className="ftco-blocks-cover-1">
    <div
      className="site-section-cover overlay background"
      // style={{backgroundImage: "url('images/banner/home.jpg')"}}
    >
      <div className="container">
        <div className="row align-items-center">
          {children}
        </div>
      </div>
    </div>
    <style jsx>{`
      .background {
        bckground: #262626;
        background: linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.5)), url(./images/banner/home.jpg) center;
      }
      @media screen and (max-width: 500px) {
        bckground: #262626;
        background: linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.7)), url(./images/banner/home.jpg);
        background: -webkit-linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.7)), url(./images/banner/home.jpg);
        background: -moz-linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.8)), url(./images/banner/home.jpg);
      }
    `}</style>
  </div>
);
