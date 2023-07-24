import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { lastReadings } from "../utils/analytics.js";
//import { latestReadings } from '../utils/analytics.js';

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    let stationReadings = await lastReadings(request.params.id);
    const viewData = {
      title: station.stationName,
      latitude: station.latitude,
      longitude: station.longitude,
      station: station,
      // displayReading: displayReadings,
    };
    Object.assign(viewData, stationReadings.reading)
    // console.log(`${JSON.stringify(viewData)}`);
    response.render("station-view", viewData);
  },
  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);

    // Added date with if statements so dates have 2 digitis if single nunber is returned
    const date = new Date();
    let yyyy = date.getFullYear();
    let mn = date.getMonth() + 1;
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    if(mn<10)
        mn = '0' + mn;
    if(dd<10)
        dd = '0' + dd;
    if(hh<10)
        hh = '0' + hh;
    if(mm<10)
        mm = '0' + mm;
    if(ss<10)
        ss = '0' + ss;
    let dateTime = yyyy + "-" + mn + "-" + dd + " " + hh + ":" + mm + ":" + ss;
    
    const newReading = {
      timeStamp: String(dateTime),
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windDirection: Number(request.body.windDirection),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };
    // console.log(`adding reading code:${newReading.code}, temperature:${newReading.temperature}, windSpeed:${newReading.windSpeed}, windDirection:${newReading.windDirection}, pressure:${newReading.pressure}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

  async deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    // console.log(`Deleting Reading ${readingId} from Station ${stationId}`);
    await readingStore.deleteReading(readingId);
    response.redirect("/station/" + stationId);
  }

};
