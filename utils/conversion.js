const weatherConditions = new Map();
    weatherConditions.set(100, { description: "Clear", icon: "clear-day" });
    weatherConditions.set(200, { description: "Partial Clouds", icon: "cloud-up" });
    weatherConditions.set(300, { description: "Cloudy", icon: "cloudy" });
    weatherConditions.set(400, { description: "Light Showers", icon: "drizzle" });
    weatherConditions.set(500, { description: "Heavy Showers", icon: "extreme-rain" });
    weatherConditions.set(600, { description: "Rain", icon: "rain" });
    weatherConditions.set(700, { description: "Snow", icon: "snow" });
    weatherConditions.set(800, { description: "Thunder", icon: "thunderstorms" });

    const WindSpeed = new Map();
    WindSpeed.set(0, { description: "Calm", icon: "beaufort-0" });
    WindSpeed.set(1, { description: "Light Air", icon: "beaufort-1" });
    WindSpeed.set(2, { description: "Light Breeze", icon: "beaufort-2" });
    WindSpeed.set(3, { description: "Gentle Breeze", icon: "beaufort-3" });
    WindSpeed.set(4, { description: "Moderate Breeze", icon: "beaufort-4" });
    WindSpeed.set(5, { description: "Fresh Breeze", icon: "beaufort-5" });
    WindSpeed.set(6, { description: "Strong Breeze", icon: "beaufort-6" });
    WindSpeed.set(7, { description: "Near Gale", icon: "beaufort-7" });
    WindSpeed.set(8, { description: "Gale", icon: "beaufort-8" });
    WindSpeed.set(9, { description: "Severe Gale", icon: "beaufort-9" });
    WindSpeed.set(10, { description: "Strong storm", icon: "beaufort-10" });
    WindSpeed.set(11, { description: "Violent Storm", icon: "beaufort-11" });

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

};