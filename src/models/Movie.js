class Movie {
  constructor({
    adult,
    id,
    original_language,
    original_title,
    title,
    release_date,
    overview,
    backdrop_path,
    poster_path,
    popularity,
    vote_average,
    vote_count,
  }) {
    this.id = id;
    this.images = {
      backdrop_path: backdrop_path,
      poster_path: poster_path,
    };
    this.about = {
      original_title: original_title,
      original_language: original_language,
      title: title,
      overview: overview,
      adult: adult,
      release_date: release_date,
    };
    this.reviews = {
      popularity: popularity,
      vote_average: vote_average,
      vote_count: vote_count,
    };
  }
}

module.exports = Movie;
