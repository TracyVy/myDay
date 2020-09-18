import React from "react";

import "./youtube.module.css";
import "../Footer/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import classes from "./youtube.module.css";

async function searchYouTube(q) {
  q = encodeURIComponent(q);
  const response = await fetch(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    }
  );
  const body = await response.json();
  console.log(body);
  return body.items.filter((item) => item.type === "video");
}

function YouTube() {
  const [query, setQuery] = React.useState("React tutorial");
  const [list, setList] = React.useState(null);

  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };

  return (
    <div className={classes.youtubeApp}>
      <Card responsive>
        <Card.Body>
          <Card.Title>YouTube</Card.Title>

          <form onSubmit={search} className={classes.youtubeForm}>
            <input
              className={classes.youtubeInput}
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className={classes.youtubeButton}>Search YouTube</button>
          </form>
          {list &&
            (list.length === 0 ? (
              <p>No results</p>
            ) : (
              <ul className="items">
                {list.map((item) => (
                  <li className="item" key={item.id}>
                    <div>
                      <b>
                        <a href={item.link}>{item.title}</a>
                      </b>
                      <p>{item.description}</p>
                    </div>
                    <ul className="meta">
                      <li>
                        By: <a href={item.author.ref}>{item.author.name}</a>
                      </li>
                      <li>Views: {item.views}</li>
                      <li>Duration: {item.duration}</li>
                      <li>Uploaded: {item.uploaded_at}</li>
                    </ul>
                    <img alt="" src={item.thumbnail} />
                  </li>
                ))}
              </ul>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default YouTube;
