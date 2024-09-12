import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is John Dou",
        "I'm full stack developer",
        "Androide Developer (React Native)"],

      typespeed: 50,
      backspeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  },[]);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right"
             data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning m-3"
          >
            {" "}
            Download Resume{" "}
          </a>
        </div>
        <div className="right" data-aos="fade-up-left"
             data-aos-duration="1000ms">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
