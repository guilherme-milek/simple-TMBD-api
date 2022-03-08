const apiError = (error) => {
  return error.response?.data
    ? error.response.data
    : ({
        errors: ["unknown error has ocurred"],
      },
      console.log(error));
};

module.exports = apiError;
