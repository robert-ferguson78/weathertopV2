export const maxMin = {
    minMaxReadings(stationReadings, readingType, minMax) {
      let minVal = null;
      let maxVal = null;
        if (readingType === "temperature") {
          minVal = Math.min(...stationReadings.map((stationReadings) => stationReadings.temperature));
          maxVal = Math.max(...stationReadings.map((stationReadings) => stationReadings.temperature));
        } else if (readingType === "windSpeed") {
          minVal = Math.min(...stationReadings.map((stationReadings) => stationReadings.windSpeed));
          maxVal = Math.max(...stationReadings.map((stationReadings) => stationReadings.windSpeed));
        } else if (readingType === "pressure") {
          minVal = Math.min(...stationReadings.map((stationReadings) => stationReadings.pressure));
          maxVal = Math.max(...stationReadings.map((stationReadings) => stationReadings.pressure));
        }
        if (minMax === "min") {
          return minVal;
        } else if (minMax === "max") {
          return maxVal;
        }
      }
};