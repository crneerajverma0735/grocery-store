import React from "react";
import Navbar from "../navbar/Navbar";
import Slideshow from "./Slideshow";
import Section from "./Section";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Slideshow />
      <Section />
    </div>
  );
};

export default Home;
