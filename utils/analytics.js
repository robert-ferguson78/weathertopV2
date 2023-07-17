export const latestReadings = {
    getLatestReadingTemp() {
        let readings = [1,2,3,4,5];
        let latestReadingTemp = null;
        if (readings.length > 0) {
          latestReadingTemp = readings[readings.length - 1];
        }
        return latestReadingTemp;
      },
    };