const { filterMedias } = require("../helpers/filters");

class Person {
  constructor({
    adult,
    id,
    name,
    known_for,
    known_for_department,
    profile_path,
    popularity,
  }) {
    this.id = id;
    this.images = {
      profile_path: profile_path,
    };
    this.about = {
      name: name,
      known_for_department: known_for_department,
      popularity: popularity,
      adult: adult,
    };
    this.known_for = known_for.map((media) => filterMedias(media));
  }
}

module.exports = Person;
