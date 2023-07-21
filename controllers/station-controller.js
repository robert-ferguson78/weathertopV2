import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { lastReadings } from "../utils/analytics.js";
//import { latestReadings } from '../utils/analytics.js';

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    let stationReadings = await lastReadings(request.params.id);
    const viewData = {
      title: "Station",
      station: station,
      // displayReading: displayReadings,
    };
    Object.assign(viewData, stationReadings.reading)
    console.log(`${JSON.stringify(viewData)}`);
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
