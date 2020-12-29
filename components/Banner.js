import React from "react";

export const Banner = ({children, ...rest}) => (
  <div className="ftco-blocks-cover-1">
    <div
      className="site-section-cover overlay"
      style={{backgroundImage: "url('./images/banner/home.jpg')"}}
    >
      <div className="container">
        <div className="row align-items-center">
          {children}
        </div>
      </div>
    </div>
  </div>
);
