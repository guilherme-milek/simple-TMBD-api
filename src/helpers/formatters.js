const linkGenerator = ({ ...data }) => {
  delete data.query;

  return Object.keys(data).reduce(
    (previousValue, currentValue, index, array) => {
      return (
        (index <= array.length - 1 ? "&" : "") +
        previousValue +
        `${currentValue}=${data[currentValue]}`
      );
    },
    ""
  );
};

const queryFormatter = (query) => {
  return !!query
    ? `query=${query
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(" ", "%20")}`
    : "";
};

module.exports = { linkGenerator, queryFormatter };
