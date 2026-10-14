export function getWeatherCondition(temperature) {
  if (temperature >= 86) return "hot";
  if (temperature >= 66) return "warm";
  return "cold";
}

export function filterWeatherData(data) {
  if (!Number.isFinite(data.main?.temp)) {
    throw new Error("Weather response is missing the temperature.");
  }
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    type: getWeatherCondition(data.main.temp),
  };
}

export function getWeather({ latitude, longitude }, apiKey) {
  const parameters = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    units: "imperial",
    appid: apiKey,
  });
  return fetch(`https://api.openweathermap.org/data/2.5/weather?${parameters}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Weather request failed (${response.status}).`);
      return response.json();
    })
    .then(filterWeatherData);
}
