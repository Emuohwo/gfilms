import React from 'react';

export const Services = () => (
    <div id="services">
        <div className="container">
            <h3 className="mb-5">SERVICES @ GUZEE FILMS</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="services-col">
                        <h4>Script Writing/Scripting</h4>
                        <p>
                            There's no better way to tell a story if not through documenting
                            it down on paper or electronic devices, which is called Scripting
                            or Script Writing which actually form the basis of a good movie.
                            I and my team of highly professional Script Writers are writing
                            tirelessly every story and we have the best script for yu to actually
                            meet your fancy.
                            We also buy script from independent writers which we shoot as well,
                            and also, we market scripts for writers.
                        </p>
                        {/* <p>
                            We also buy script from independent writers which we shoot as well,
                            and also, we market scripts for writers.
                        </p> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="services-col">
                        <h4>Cinematography</h4>
                        <p>
                            Camera is our obsession. There is no better way to view or see the 
                            world if not through the eyes of the camera. My team of highly professional 
                            Cinematographers and Camera men with top-notch skills and experiences in cameras
                            such as CANON, SONY, PANASONIC, BLACK MAGIC, etc will take the shots of your
                            MUSIC VIDEOS, DOCUMENTARIES, SHOT FILMS, COMEDY SKITS, AUDIO VISUAL ADS, and ALL 
                            your EVENTS like a BLOCKBUSTER MOVIE.
                        </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div>
                        <h4>Editing</h4>
                        <p>
                            It forms an integral and highly important aspect in both Movie and Music Video Production: 
                            including EVENT COVERAGE, because it's how you finish a thing that matters the most and not 
                            how you actually started, and Editing is the finishing of all VISUAL PRODUCTION/CONTENT, 
                            and "NO ONE" does it better than us at GUZEE FILMS STUDIOS. We use the latest version 
                            of ADOBE PREMIER PRO wit very mad filters and resolution.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 offset-md-1">
                    <div className="services-col">
                        <h4>Music Video Production</h4>
                        <p>
                            Who best brings to life a Script if not the Director? And how 
                            best can a Script be brought to life if not through credible Directing.
                        </p>
                        <p>
                            With my wealth of knowledge and experience spanning over a decade is actually to your 
                            advantage because you only get the best from us all at GUZEE FILMS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>
            {`
            #services {
                padding: 5rem 0 2rem;
                background-color: #f2f2f2 !important;
                background: linear-gradient(#e6e6e6, transparent, #f2f2f2)
            }
            h3,
            h4 {
                text-align: center;
                font-weight: bold;
            }
            .services-col {
                padding: 0.9rem;
                border-radius: 5px;
            }
            `}
        </style>
    </div>
)