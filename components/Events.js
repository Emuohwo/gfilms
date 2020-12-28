import React from "react";
import Link from "next/link";

export const Events = () => (
  <div className="site-section bg-white" id="event">
    <div className="container">
      <div className="row mb-5 ">
        <div className="col-md-7 text-center mx-auto">
          {/* <span className="subtitle-39293">News</span> */}
          <h2 className="serif">Events</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 text-center mx-auto">
        {/* <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffb.me%2FEloshines&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="500" 
         scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media">

        </iframe> */}
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fm.facebook.com%2FGUZEE-FILMS-891304044228286%2F&tabs=timeline%2C%20events&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="500" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
        
      </div>
    </div>
    <style jsx>
      {`
      iframe {
        width: 100%;
        height: 400px;
        border: none;
        overflow:hidden;
      }
      `}
    </style>
  </div>
);
