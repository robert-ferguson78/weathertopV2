import { readingStore } from "../models/reading-store.js";

// export const latestReadings = {
//     getLatestReadingTemp() {
//         let readings = [1,2,3,4,5];
//         let latestReadingTemp = null;
//         if (readings.length > 0) {
//           latestReadingTemp = readings[readings.length - 1];
//         }
//         return latestReadingTemp;
//       },
//     };

export const lastReadings = async (id) => {
  let stationReadings = await readingStore.getReadingsBystationId(id);
  let lastReading = null;
  const reading = {
    latestCode: "No Code",
    latestTemp: "No Temp",
    latestWindSpeed: "No WindSpeed",
    latestPressure: "No Pressure",
  }
  if(stationReadings.length > 0) {
    lastReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[lastReading].code;
    reading.latestTemp = stationReadings[lastReading].temperature;
    reading.latestWindSpeed = stationReadings[lastReading].windSpeed;
    reading.latestPressure = stationReadings[lastReading].pressure;
  }
  return {
    lastReading: lastReading,
    reading: reading,
  }
};
