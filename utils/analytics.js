import { readingStore } from "../models/reading-store.js";
import { conversions } from "./conversion.js";

export const lastReadings = async (id) => {
  let stationReadings = await readingStore.getReadingsBystationId(id);
  let lastReading = null;
  const reading = {
    latestCode: "No Code",
    latestTempC: "No Temp",
    latestTempF: "No Temp",
    latestWindSpeed: "No WindSpeed",
    latestPressure: "No Pressure",
  }
  if(stationReadings.length > 0) {
    lastReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[lastReading].code;
    reading.latestWeatherDescription = conversions.weatherDescription(reading.latestCode);
    reading.latestWeatherIcon = conversions.weatherIcon(reading.latestCode);
    reading.latestTempC = stationReadings[lastReading].temperature;
    reading.latestWindSpeed = conversions.kmToBf(stationReadings[lastReading].windSpeed);
    reading.latestWindSpeedDescription = conversions.windSpeedDescription(reading.latestWindSpeed);
    reading.latestWindSpeedIcon = conversions.windSpeedIcon(reading.latestWindSpeed);
    reading.latestPressure = stationReadings[lastReading].pressure;
    reading.latestTempF = conversions.celsiusToFahrenheit(reading.latestTempC);
  }
  return {
    lastReading: lastReading,
    reading: reading,
  }
};
