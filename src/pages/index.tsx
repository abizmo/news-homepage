import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>News Homepage</title>
      </Head>
      <Header />
      <main>
        <div>
          <section id="hero">
            <picture>
              <source
                srcSet="/images/image-web-3-desktop.jpg"
                media="(min-width: 70em)"
              />
              <img src="/images/image-web-3-mobile.jpg" alt="Hero Image" />
            </picture>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </section>
          <section>
            <h2>New</h2>
            <ul>
              <li>
                <div>
                  <a href="#">
                    <h3>Hydrogen VS Electric Cars</h3>
                  </a>
                  <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
              </li>
              <li>
                <div>
                  <a href="#">
                    <h3>The Downsides of AI Artistry</h3>
                  </a>
                  <p>
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <a href="#">
                    <h3>Is VC Funding Drying Up?</h3>
                  </a>
                  <p>
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <section>
          <ul>
            <li>
              <div>
                <Image
                  src="/images/image-retro-pcs.jpg"
                  alt="small computer"
                  width={100}
                  height={128}
                />
                <div>
                  <h2>01</h2>
                  <a href="#">
                    <h3>Reviving Retro PCs</h3>
                  </a>
                  <p>What happens when old PCs are given modern upgrades?</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <Image
                  src="/images/image-top-laptops.jpg"
                  alt="laptop keys"
                  width={100}
                  height={128}
                />
                <div>
                  <h2>02</h2>
                  <a href="#">
                    <h3>Top 10 Laptops of 2022</h3>
                  </a>
                  <p>Our best picks for various needs and budgets.</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <Image
                  src="/images/image-gaming-growth.jpg"
                  alt="dualshock"
                  width={100}
                  height={128}
                />
                <div>
                  <h2>03</h2>
                  <a href="#">
                    <h3>The Growth of Gaming</h3>
                  </a>
                  <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
