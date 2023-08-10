import Services from "../components/UI/Services";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Osman KOYUNCU</title>
        <meta name="description" content="Rest Play" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="LLJiIX_X0gbF1leZqlLiyA8hX5eiVFAryTXXDNRuRsc"
        />
      </Head>
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}
