import { type NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import NewsWithImageList from "../components/NewsWithImageList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>News Homepage</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 lg:px-0">
        <section
          id="hero"
          className="mb-16 grid gap-6 lg:mb-[72px] lg:grid-cols-3 lg:gap-x-7 lg:gap-y-8"
        >
          <picture className="lg:col-span-2">
            <source
              srcSet="/images/image-web-3-desktop.jpg"
              media="(min-width: 70em)"
            />
            <img src="/images/image-web-3-mobile.jpg" alt="Hero Image" />
          </picture>

          <h1 className="max-w-xs text-4xl font-black text-very-dark-blue lg:text-5xl">
            The Bright Future of Web 3.0?
          </h1>
          <div className="mb-10 lg:mb-0">
            <p className="mb-6 max-w-xs lg:mb-9">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-soft-red px-8 py-4 text-sm font-bold uppercase text-off-white hover:bg-very-dark-blue">
              Read more
            </button>
          </div>
          <section
            id="New"
            className="bg-very-dark-blue px-5 py-6 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:px-6 lg:py-8"
          >
            <h2 className="mb-2 text-3xl font-bold text-soft-orange lg:text-4xl">
              New
            </h2>
            <NewsList />
          </section>
        </section>
        <section>
          <NewsWithImageList />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
