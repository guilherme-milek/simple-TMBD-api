const { filterResult } = require("../helpers/filters");

class Media {
  constructor(
    { page, total_pages, total_results, results },
    searchFilter = undefined
  ) {
    this.page = page;
    this.total_pages = total_pages;
    this.total_results = total_results;
    this.results = results.map((result) => filterResult(result, searchFilter));
  }
}

module.exports = Media;
