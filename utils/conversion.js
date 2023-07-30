const weatherConditions = new Map();
    weatherConditions.set(100, { description: "Clear", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/clear-day" });
    weatherConditions.set(200, { description: "Partial Clouds", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/cloud-up" });
    weatherConditions.set(300, { description: "Cloudy", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/cloudy" });
    weatherConditions.set(400, { description: "Light Showers", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/drizzle" });
    weatherConditions.set(500, { description: "Heavy Showers", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/extreme-rain" });
    weatherConditions.set(600, { description: "Rain", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/rain" });
    weatherConditions.set(700, { description: "Snow", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/snow" });
    weatherConditions.set(800, { description: "Thunder", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/thunderstorms" });

    const WindSpeed = new Map();
    WindSpeed.set(0, { description: "Calm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-0" });
    WindSpeed.set(1, { description: "Light Air", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-1" });
    WindSpeed.set(2, { description: "Light Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-2" });
    WindSpeed.set(3, { description: "Gentle Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-3" });
    WindSpeed.set(4, { description: "Moderate Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-4" });
    WindSpeed.set(5, { description: "Fresh Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-5" });
    WindSpeed.set(6, { description: "Strong Breeze", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-6" });
    WindSpeed.set(7, { description: "Near Gale", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-7" });
    WindSpeed.set(8, { description: "Gale", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-8" });
    WindSpeed.set(9, { description: "Severe Gale", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-9" });
    WindSpeed.set(10, { description: "Strong storm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-10" });
    WindSpeed.set(11, { description: "Violent Storm", icon: "https://cdn.glitch.global/80ce3e4b-d8a6-4fd5-8cd5-7803d57b6847/wind-beaufort-11" });

export const conversions = {
    celsiusToFahrenheit(temperature) {
      const calc = (temperature * 1.8) + 32;
      return Math.round(calc * 100.00) / 100.00;
    },

    kmToBf(windSpeed) {
        if (windSpeed <= 1) {
          return 0;
        } else if (windSpeed > 1 && windSpeed <= 5) {
          return 1;
        } else if (windSpeed >= 6 && windSpeed <= 11) {
          return 2;
        } else if (windSpeed >= 12 && windSpeed <= 19) {
          return 3;
        } else if (windSpeed >= 20 && windSpeed <= 28) {
          return 4;
        } else if (windSpeed >= 29 && windSpeed <= 38) {
          return 5;
        } else if (windSpeed >= 39 && windSpeed <= 49) {
          return 6;
        } else if (windSpeed >= 50 && windSpeed <= 61) {
          return 7;
        } else if (windSpeed >= 62 && windSpeed <= 74) {
          return 8;
        } else if (windSpeed >= 75 && windSpeed <= 88) {
          return 9;
        } else if (windSpeed >= 89 && windSpeed <= 102) {
          return 10;
        } else if (windSpeed >= 103 && windSpeed <= 117) {
          return 11;
        } else {
          return 11;
        }
      },

      weatherDescription(code) {
        return weatherConditions.get(code).description;
      },
    
      weatherIcon(code) {
        return weatherConditions.get(code).icon;
      },

      windSpeedDescription(code) {
        return WindSpeed.get(code).description;
      },
    
      windSpeedIcon(code) {
        return WindSpeed.get(code).icon;
      },

      windCompassReading(degreeToConvert) {
        let windDirectionText = "No Reading";
        if ((degreeToConvert > 348.75 && degreeToConvert <= 360) || (degreeToConvert >= 0 && degreeToConvert <= 11.25)) {
          windDirectionText = "North";
        } else if (degreeToConvert > 11.25 && degreeToConvert <= 33.75) {
          windDirectionText = "North North East";
        } else if (degreeToConvert > 33.75 && degreeToConvert <= 56.25) {
          windDirectionText = "North East";
        } else if (degreeToConvert > 56.25 && degreeToConvert <= 78.75) {
          windDirectionText = "East North East";
        } else if (degreeToConvert > 78.75 && degreeToConvert <= 101.25) {
          windDirectionText = "East";
        } else if (degreeToConvert > 101.25 && degreeToConvert <= 123.75) {
          windDirectionText = "East South East";
        } else if (degreeToConvert > 123.75 && degreeToConvert <= 146.25) {
          windDirectionText = "South East";
        } else if (degreeToConvert > 146.25 && degreeToConvert <= 168.75) {
          windDirectionText = "South South East";
        } else if (degreeToConvert > 168.75 && degreeToConvert <= 191.25) {
          windDirectionText = "South";
        } else if (degreeToConvert > 191.25 && degreeToConvert <= 213.75) {
          windDirectionText = "South South West";
        } else if (degreeToConvert > 213.75 && degreeToConvert <= 236.25) {
          windDirectionText = "South West";
        } else if (degreeToConvert > 236.25 && degreeToConvert <= 258.75) {
          windDirectionText = "West South West";
        } else if (degreeToConvert > 258.75 && degreeToConvert <= 281.25) {
          windDirectionText = "West";
        } else if (degreeToConvert > 281.25 && degreeToConvert <= 303.75) {
          windDirectionText = "West North West";
        } else if (degreeToConvert > 303.75 && degreeToConvert <= 326.25) {
          windDirectionText = "North West";
        } else if (degreeToConvert > 326.25 && degreeToConvert <= 348.75) {
          windDirectionText = "North North West";
        } else {
          windDirectionText = "Error";
        }
        return windDirectionText;
      },

      calculateWindChill(temperature, windSpeed) {
        let windChill = 0;
        windChill = 13.12 + (0.6215 * temperature) - 11.37 * (Math.pow(windSpeed, 0.16))
            + (0.3965 * temperature) * (Math.pow(windSpeed, 0.16));
        return Math.round(windChill * 100.0) / 100.0;
      },

};