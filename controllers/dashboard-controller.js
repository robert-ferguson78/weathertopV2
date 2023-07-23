import { accountsController } from "./accounts-controller.js";
import { stationStore } from "../models/station-store.js";
import { lastReadings } from "../utils/analytics.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationsByUserId(loggedInUser._id),
    };
    for (const station of viewData.stations) {
      const readingObject = await lastReadings(station._id);
      console.log(`${JSON.stringify(readingObject)}`);
      Object.assign(station, readingObject.reading)
    }
    console.log("dashboard rendering");
    console.log(`${JSON.stringify(viewData)}`);
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      stationName: request.body.stationName,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.stationName}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },
};
