import PageView from "../components/page-view.component";
import Expirence from "../components/expirence.component";
import About from "../components/portfolio-about.component";
import ImageSection from "../components/portfolio-image-section.component";
import Footer from "../components/potfolio-footer.component";
import React, { useRef } from "react";
const Home = () => {
  const targetRef = useRef(null);
  const scrollInto = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <PageView />
      <ImageSection />
      <About
        color={"portfolio-about-content"}
        button={"portfolio-btn"}
        scrollInto={scrollInto}
        head={"About The Easyb Studio"}
      />
      <Expirence />
      <Footer targetRef={targetRef} />
    </>
  );
};

export default Home;
