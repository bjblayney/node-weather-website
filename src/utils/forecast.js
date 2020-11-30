const request = require("request");

const forecast = (lat, lng, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=bd7bc154cb90bf63afe66750ed636ba3&query=" +
    lat +
    "," +
    lng;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location!");
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees, it feels like " +
          body.current.feelslike +
          " degrees. The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
