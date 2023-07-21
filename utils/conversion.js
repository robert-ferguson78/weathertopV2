export const conversions = {
    celsiusToFahrenheit(temperature) {
      const calc = (temperature * 1.8) + 32;
      return Math.round(calc * 100.00) / 100.00;
    },
};