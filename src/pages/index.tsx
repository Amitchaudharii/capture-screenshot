import Head from "next/head";
import MainContainer from "@/common/layout/MainContainer";
import MainSection from "@/components/section/MainSection";
import { BackgroundBeamsWithCollision } from "@/components/background/BackgroundBeams";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capture Website Screenshots</title>
        <meta
          name="description"
          content="Enter any URL and get a high-quality screenshot in seconds. Ourtool instantly captures full-page snapshots, making it easy tosave, share, or analyze web pages effortlessly."
        />
        <meta
          name="keywords"
          content="screenshot, generator, webURL, image, capture"
        />
        <meta name="author" content="Amit Chaudhary" />

        <meta property="og:title" content="Capture Website Screenshots" />
        <meta
          property="og:description"
          content="Enter any URL and get a high-quality screenshot in seconds. Ourtool instantly captures full-page snapshots, making it easy tosave, share, or analyze web pages effortlessly."
        />
        <meta property="og:image" content="" />
        <meta
          property="og:url"
          content="https://screenshotgenerator.aamitchaudhary.com.np"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Capture Website Screenshots" />
        <meta
          name="twitter:description"
          content="Enter any URL and get a high-quality screenshot in seconds. Ourtool instantly captures full-page snapshots, making it easy tosave, share, or analyze web pages effortlessly."
        />
        <meta name="twitter:image" content="" />

        <link
          rel="canonical"
          href="https://screenshotgenerator.aamitchaudhary.com.np"
        />
      </Head>
      <BackgroundBeamsWithCollision>
        <MainContainer>
          <MainSection />
        </MainContainer>
      </BackgroundBeamsWithCollision>
    </>
  );
}
