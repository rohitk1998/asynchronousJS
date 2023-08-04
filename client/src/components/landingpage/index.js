import React, { useEffect, useState } from "react";
import MainContent from "./maincontent";
import Reviews from "./peoplereview";
import ContactForm from "./contactform";

const crousalData = [
  {
    image:
      "https://images.unsplash.com/photo-1543932927-a9def13a0e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "Start A New Life With The One You Love",
    paragraph:
      "Marriage is a lifelong commitment, a promise to stand by each other through thick and thin, and to grow together as a couple.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Love is the foundation of a successful marriage",
    paragraph:
      " In marriage, you have a partner to share life's joys and challenges, and together you can achieve more than you could alone.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    title: "Marriage provides a strong support system. ",
    paragraph:
      "Open and honest communication is essential in marriage. It helps build trust, resolve conflicts, and deepen your understanding of each other.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664303675595-e4d315e77146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          <MainContent data={content} />
          </div>
          <div className="p-0 container-fluid">
             <Reviews/>
          </div>
          <div className="p-0 container-fluid">
            <ContactForm/>
          </div>
        </div>
      </div>
      {/* <ProgrammingTopices data={data} /> */}
    </>
  );
};

export default Landingpage;
