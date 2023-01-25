import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";

const news = [
  {
    url: "#",
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    url: "#",
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    url: "#",
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>News Homepage</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 lg:px-0">
        <div className="lg:mb-18 mb-16 lg:flex lg:gap-7">
          <section id="hero" className="mb-16 lg:mb-0">
            <picture className="mb-6 block lg:mb-9">
              <source
                srcSet="/images/image-web-3-desktop.jpg"
                media="(min-width: 70em)"
              />
              <img src="/images/image-web-3-mobile.jpg" alt="Hero Image" />
            </picture>

            <div className="lg:flex lg:gap-7">
              <div className="lg:flex-1">
                <h1 className="mb-4 max-w-xs text-4xl font-black text-very-dark-blue lg:mb-0 lg:text-5xl">
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="lg:flex-1">
                <p className="mb-6 max-w-xs lg:mb-9">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="bg-soft-red px-8 py-4 text-sm font-bold uppercase text-off-white">
                  Read more
                </button>
              </div>
            </div>
          </section>
          <section className="bg-very-dark-blue px-5 py-6 lg:px-6 lg:py-8">
            <h2 className="mb-2 text-3xl font-bold text-soft-orange lg:text-4xl">
              New
            </h2>
            <ul>
              {news.map(({ url, title, description }) => (
                <li
                  key={title}
                  className="border-dark-grayish-blue py-7 last:pb-0 [&:not(:last-child)]:border-b"
                >
                  <h3 className="mb-2 text-2xl font-bold text-off-white lg:mb-3">
                    <a href={url}>{title}</a>
                  </h3>
                  <p>{description}</p>
                </li>
              ))}
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
