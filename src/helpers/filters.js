const Movie = require("../models/Movie");
const TvShow = require("../models/TvShow");

const filterResult = (result, searchFilter) => {
  const Person = require("../models/Person");

  switch (result.media_type || searchFilter) {
    case "person":
      const person = new Person(result);
      !searchFilter && (person.media_type = "person");
      return person;
    case "movie":
      const movie = new Movie(result);
      !searchFilter && (movie.media_type = "movie");
      return movie;
    case "tv":
      const tv = new TvShow(result);
      !searchFilter && (tv.media_type = "tv");
      return tv;
    default:
      break;
  }
};

const filterMedias = (media) => {
  switch (media.media_type) {
    case "movie":
      const movie = new Movie(media);
      movie.media_type = "movie";
      return movie;
    case "tv":
      const tv = new TvShow(media);
      tv.media_type = "tv";
      return tv;
    default:
      break;
  }
};

module.exports = { filterResult, filterMedias };
