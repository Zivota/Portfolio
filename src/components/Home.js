import "../styles/_global.scss";
import React from "react";
import Navbar from "../UI/Navbar";
import Logo from "../UI/Logo";
import Menu from "./Menu";
import Hero from "./Hero";
import Quote from "./Quote";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="home">
      <Navbar>
        <Logo />
        <Menu />
      </Navbar>
      <Hero />
      <Quote />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
