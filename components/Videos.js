import React from "react";

export const Videos = () => (
  <div className="site-section" id="Videos">
    <div className="container">
      <div className="row mb-5 ">
        <div className="col-md-7 text-center mx-auto">
          {/* <span className="subtitle-39293">See The Video</span> */}
          <h2 className="serif">Selected Videos</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-5">
          <a
            href="https://www.youtube.com/watch?v=2NB-HWCGq-U"
            data-fancybox
            className="btn-video_38929"
          >
            <span>
              <span className="icon-play"></span>
            </span>
            <img src="images/films_cover.PNG" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-6">
          <a
            href="https://youtu.be/j0igQ5pdY5I"
            data-fancybox
            className="btn-video_38929"
          >
            <span>
              <span className="icon-play"></span>
            </span>
            <img src="images/video_cover.PNG" alt="Image" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
       #Videos {
         background: black;
         background: linear-gradient(45deg, #f4ad2d, black);
         -webkit-background: linear-gradient(45deg, #f4ad2d, black);
         -moz-background: linear-gradient(45deg, #f4ad2d, black);
       }
      `}
    </style>
  </div>
);
