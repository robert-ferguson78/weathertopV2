import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { readingStore } from "./reading-store.js";

const db = initStore("stations");

export const stationStore = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },

  async addStation(station) {
    await db.read();
    station._id = v4();
    db.data.stations.push(station);
    await db.write();
    return station;
  },

  async getStationsByUserId(userid) {
    await db.read();
    return db.data.stations.filter((station) => station.userid === userid);
  },

  async getStationById(id) {
    await db.read();
    const list = db.data.stations.find((station) => station._id === id);
    list.readings = await readingStore.getReadingsBystationId(list._id);
    return list;
  },

  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
     // If station exists, remove it and delete related readings.
    if(index !== -1) {
    db.data.stations.splice(index, 1);
    await readingStore.deleteStationReadings(id);
    await db.write();
    }
  },

  async deleteStationsById(stationId) {
    await db.read();
    let stationRemoveList = db.data.stations.filter((station) => station.userid === stationId._id);
    // console.log(`${JSON.stringify(stationTest)}`);
    stationRemoveList = Array.from(stationRemoveList);
    let stationIdsToRemove = [];
    for (let i=0; i < stationRemoveList.length; i++ ) {
      stationIdsToRemove[i] = stationRemoveList[i]._id;
    };
    await readingStore.deleteStationReadings(stationIdsToRemove);
    db.data.stations = db.data.stations.filter((station) => station.userid !== stationId._id);
    await db.write();
  },

  async deleteAllstations() {
    db.data.stations = [];
    await db.write();
  }
};
