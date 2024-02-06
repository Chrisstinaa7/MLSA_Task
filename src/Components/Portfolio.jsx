/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "desk with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Gym Landing Page🎉",
    description:
      "Start your fitness journey with FitFusion's beginners friendly fitness plans.",
    url: "https://chrisstinaa7.github.io/FitFusion/",
  },
  {
    title: "BMI calculator",
    description:
      "A Python project for calculating Body Mass Index (BMI) with user input validation and results display.",
    url: "https://chrisstinaa7.github.io/BMI-Calculator/",
  },
  {
    title: "My Portfolio",
    description:
      "Explore my portfolio to know all about me and my projects.",
    url: "https://github.com/Chrisstinaa7/CodSoft/tree/main/Portfolio%20-%20Task%202%20-%20Level%201",
  },
  {
    title: "Simple Calculator Site",
    description:
      "A straightforward web-based calculator for basic arithmetic operations.",
    url: "https://github.com/Chrisstinaa7/CodSoft/tree/main/Calculator%20-%20Task%203%20-%20Level%201",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
