import React, { useState, useEffect } from "react";

function QuoteFetcher() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 24 * 60 * 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function getQuote() {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
        setImgSrc(data.contents.quotes[0].background);
      });
  }
  return (
    <div>
      <h5>{quote}</h5>
      <p>- {author}</p>
      <img src={imgSrc} alt="inspirational img" />
    </div>
  );
}

export default QuoteFetcher;
