import React, { useEffect, useState } from "react";
import MainContent from "./maincontent";
import Reviews from "./peoplereview";
import ContactForm from "./contactform";
import "../../App.css";
import BreakLine from "../breakLine/brakline";
import AboutUs from "./about";

const crousalData = [
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    title: "Start A New Life With The One You Love",
    paragraph:
      "Marriage is a lifelong commitment, a promise to stand by each other through thick and thin, and to grow together as a couple.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488600779855-8151a2b2e4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Love is the foundation of a successful marriage",
    paragraph:
      " In marriage, you have a partner to share life's joys and challenges, and together you can achieve more than you could alone.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Marriage provides a strong support system. ",
    paragraph:
      "Open and honest communication is essential in marriage. It helps build trust, resolve conflicts, and deepen your understanding of each other.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title:
      "A successful marriage is built on a strong foundation of friendship",
    paragraph:
      "A good sense of humor can lighten any situation. Finding reasons to laugh together brings joy and happiness to your marriage.",
  },
];

const Landingpage = () => {
  const [content, setContent] = useState(crousalData[0]);

  setTimeout(() => {
    const index = crousalData.findIndex((item) => item.image == content.image);
    console.log("index", index);
    if (index < 3) {
      setContent(crousalData[index + 1]);
    } else {
      setContent(crousalData[0]);
    }
  }, 3000);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0 p-0">
          <div className="col-lg-12">
            <MainContent data={content} />
          </div>
          <BreakLine sectionName={"About"} />
            <AboutUs />
          <BreakLine sectionName={"Happy Clients"} />
          <div className="p-0 container-fluid m-0 d-flex w-100 justify-content-center align-items-center">
            <Reviews />
          </div>
          <BreakLine sectionName={"Contact Us"} />
          <div className="p-0 container-fluid">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
