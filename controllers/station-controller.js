import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
//import { latestReadings } from '../utils/analytics.js';

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    let stationReadings = await readingStore.getReadingsBystationId(request.params.id);
    let lastReading = null;
    let lastCode = "No Code";
    let lastTemp = "No Temp";
    let lastWindSpeed = "No WindSpeed";
    let lastPressure = "No Pressure";
    if(stationReadings.length > 0) {
      lastReading = stationReadings.length - 1;
      lastCode = stationReadings[lastReading].code;
      lastTemp = stationReadings[lastReading].temperature;
      lastWindSpeed = stationReadings[lastReading].windSpeed;
      lastPressure = stationReadings[lastReading].pressure;
    }
    const viewData = {
      title: "Station",
      station: station,
      latestCode: lastCode,
      latestTemp: lastTemp,
      latestWindSpeed: lastWindSpeed,
      latestPressure: lastPressure,
    };
    console.log(`${viewData.latestTemp}`);
    response.render("station-view", viewData);
  },
  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding reading code:${newReading.code}, temperature:${newReading.temperature}, windSpeed:${newReading.windSpeed}, pressure:${newReading.pressure}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

};
