const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.json({ 'status': 'success' });
});

router.get('/weather', (req, res, next) => {
  res.json({
    'status': 'error',
    'message': 'Provide a zip code like \'/api/weather/30305\''
  })
})

router.get('/weather/:zip', (req, res, next) => {
  // note that you'll need to set up your own API key from openweathermap.org
  // and store it in your .env file.
  const url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${req.params.zip}&appid=${process.env.WEATHER_KEY}`
  axios.get(url)
    .then((response) => {
      // // whole original response
      // res.json(response.data);

      // select values from response
      const data = response.data;
      res.json({
        name: data.name,
        weather: {
          forecast: data.weather[0].main,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        },
        location: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
        temp: {
          current: data.main.temp,
          min: data.main.temp_min,
          max: data.main.temp_max,
        },
      });
    })
    .catch((err)=> {
      console.log(err);
      res.json({
        'status': 'error',
        'message': 'Failed to reach openweathermap.org.'
      })
    });
})

module.exports = router;
