import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
  const titleRef = useRef();

  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        ".letter",
        {
          x: -100,
          opacity: 0,
          margin: "0 1vw",
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.33,
          delay: 0.7,
        }
      )
      .to(".title", {
        y: 45,
        delay: 0.2,
      })
      .to(".letter", {
        margin: "0",
        delay: 0.3,
        duration: 0.3,
      })
      .to(".letter", {
        x: -titleRef.current.clientWidth,
        delay: 0.5,
        duration: 0.8,
      })
      .to(window, {
        duration: 0.5,
        scrollTo: "#nextSection",
      })
      .to("#nextSection", {
        backgroundColor: "#484d51",
        color: "#d2e4f1",
        duration: 0.2,
      })
      .to(".title", {
        y: 0,
      })
      .to(".letter", {
        x: 0,
        delay: 1,
        duration: 2,
      });
  };

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.3,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.3,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    slideInTop("#box1");
  }, []);

  useEffect(() => {
    slideInTop("#box2");
  }, []);

  useEffect(() => {
    slideInTop("#box3");
  }, []);

  useEffect(() => {
    slideInLeft("#box4");
  }, []);

  useEffect(() => {
    slideInLeft("#box5");
  }, []);

  return (
    <div>
      <h1 className="title" ref={titleRef}>
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">R</span>
        <span className="letter">C</span>
        <span className="letter">/</span>
        <span className="letter">G</span>
        <span className="letter">Ö</span>
        <span className="letter">T</span>
        <span className="letter">Z</span>
        <span className="letter">E</span>
      </h1>
      <section id="nextSection">
        <div id="box1" className="box">
          <h3>test 1</h3>
        </div>
        <div id="box2" className="box">
          <h3>test 2</h3>
        </div>
        <div id="box3" className="box">
          <h3>test 3</h3>
        </div>
        <div id="box4" className="box">
          <h3>test 4</h3>
        </div>
        <div id="box5" className="box">
          <h3>test 5</h3>
        </div>
      </section>

      <section id="lastSection">
        <div
          id="box5"
          className="box"
          // onMouseEnter={onEnter}
          // onMouseLeave={onLeave}
        >
          Last Section
        </div>
      </section>
    </div>
  );
};

export default Home;
