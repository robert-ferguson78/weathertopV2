export const maxMin = {
    minMaxReadings(stationReadings, readingType, minMax) {
        if (readingType === "temperature") {
          let minTemp = Math.min(...stationReadings.map((stationReadings) => stationReadings.temperature));
          let maxTemp = Math.max(...stationReadings.map((stationReadings) => stationReadings.temperature));
      
          if (minMax === "min") {
            return minTemp;
          } else if (minMax === "max") {
            return maxTemp;
          }
        } else if (readingType === "windSpeed") {
          let minWindSpeed = Math.min(...stationReadings.map((stationReadings) => stationReadings.windSpeed));
          let maxWindSpeed = Math.max(...stationReadings.map((stationReadings) => stationReadings.windSpeed));
          if (minMax === "min") {
            return minWindSpeed;
          } else if (minMax === "max") {
            return maxWindSpeed;
          }
        } else if (readingType === "pressure") {
          let minPressure = Math.min(...stationReadings.map((stationReadings) => stationReadings.pressure));
          let maxPressure = Math.max(...stationReadings.map((stationReadings) => stationReadings.pressure));
          if (minMax === "min") {
            return minPressure;
          } else if (minMax === "max") {
            return maxPressure;
          }
        }
      }
};