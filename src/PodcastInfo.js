import React from "react";
import podcastInfo from "./podcast-info.json";

const PodcastInfo = () => {
  return (
    <>
      <h1>{podcastInfo.title}</h1>
      <p>
        {podcastInfo.description.replace(
          "https://www.twitch.tv/doddophonique",
          "twitch"
        )}
      </p>
      <p>
        Puoi iscriverti al podcast utilizzando il tuo client preferito tramite
        il comodo{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${process.env.PUBLIC_URL}/feed.xml`}
        >
          feed
        </a>
        .
      </p>
    </>
  );
};

export default PodcastInfo;
