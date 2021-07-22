module.exports = {
  getQuestions: function (callback) {
    axios.get(api, options )
    .then((res) => {
      console.log(res.data)
      callback(res.data);
    })
    .catch((err) => {
      console.log("Error in Get: ", err);
    })
  }
}