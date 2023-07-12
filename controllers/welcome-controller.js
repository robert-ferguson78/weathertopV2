export const welcomeController = {
  index(request, response) {
    const viewData = {
      title: "Welcome to WeatherTop",
    };
    console.log("Welocome rendering");
    response.render("welcome-view", viewData);
  },
};
