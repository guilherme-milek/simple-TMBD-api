class TvShow {
  constructor({
    adult,
    id,
    original_language,
    original_name,
    name,
    origin_country,
    first_air_date,
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
      original_name: original_name,
      original_language: original_language,
      name: name,
      origin_country: origin_country,
      overview: overview,
      adult: adult,
      first_air_date: first_air_date,
    };
    this.reviews = {
      popularity: popularity,
      vote_average: vote_average,
      vote_count: vote_count,
    };
  }
}

module.exports = TvShow;
