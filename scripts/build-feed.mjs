import fs from "fs";
import Podcast from "podcast";
import uuid from "uuid/v4";
import episodes from "../src/episodes.json";
import podcastInfo from "../src/podcast-info.json";
import packageInfo from "../package.json";

const { homepage } = packageInfo;
const {
  title,
  description,
  image,
  author,
  language,
  categories,
  itunesCategory
} = podcastInfo;

const feed = new Podcast({
  title,
  description,
  feed_url: `${homepage}/feed.xml`,
  site_url: homepage,
  image_url: `${homepage}/${image}`,
  author,
  language,
  categories,
  itunesCategory,
  itunesImage: `${homepage}/${image}`
});

episodes.map(({ ordinal, title, description, files, date }) => {
  const [file] = files;
  const url = file.url
    ? file.url
    : `${homepage}/episodes/${file.name}.${file.format}`;

  const item = {
    title,
    itunesEpisode: ordinal,
    itunesTitle: title,
    description,
    url,
    guid: uuid(),
    date: new Date(date),
    enclosure: {
      url
    }
  };

  return feed.addItem(item);
});

const xml = feed.buildXml();

fs.writeFile("public/feed.xml", xml, err => {
  if (err) {
    return console.log(err);
  }

  console.log("feed created");
});
