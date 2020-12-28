import Head from "next/head";
import Link from "next/link";
import {
  Banner,
  Works,
  AboutMe,
  Videos,
  Testimonial,
  Events,
  Services,
} from "../components/sections";

export default function Home() {
  return (
    <div>
      <Head>
        
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>GUZEE FILMS | Cinematography and Video Producer</title>
        <link rel="icon" href="/gfavico1.png" />
        <link rel="canonical" href="http://guzeefilms.com.ng" />
        <meta property="og:type" content="website" />
        <meta name="description" content="GUZEE FILMS is a film production and Event Coverage Production company. We do it like no other where customer satisfaction is our focus and policy" />
        <meta name="keywords" content="Event Coverage Production company in Nigeria, the HYPE of Film Entertainment, Music, Video Production, Script Writing and Scripting, Cinematography, Film Maker In Nigeria" />
        <meta property="og:site_name" content="Film Production in Nigeria - GUZEE FILMS" />
      </Head>

      <Banner>
        <div className="col-md-7">
          <h1 className="mb-3 text-primary">...the HYPE of Film Entertainment</h1>
          <p>
            we don't just do EVENT COVERAGE; <br/> 
            we PRESERVE MEMORIES
            you wish not to forget.
          </p>
          <p>
            <Link href="#contact">
              <a className="btn btn-primary pulse">Contact Us</a>
            </Link>
          </p>
        </div>
      </Banner>
      <Services />
      <Videos />
      <Works />
      <AboutMe />
      {/* <Testimonial /> */}
      <Events />
    </div>
  );
}
