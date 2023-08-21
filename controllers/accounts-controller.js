import { userStore } from "../models/user-store.js";

export const accountsController = {
  // Initial index page to display with view data to pass in
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  // Login page to display
  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  // Logout with redirect
  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  // Signup page to display
  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("signup-view", viewData);
  },

  // Display profile page
  async profile(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
      const viewData = {
        title: "Edit User Profile",
        user: loggedInUser,
      };
      // console.log(`${JSON.stringify(viewData)}`);
      response.render("profile", viewData);
    },
  
  // Update profile info
  async profileUpdate(request, response) {
  const loggedInUser = await accountsController.getLoggedInUser(request);
    const userId = await userStore.getUserById(loggedInUser._id);
    const newUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      password: request.body.password
    };
    // console.log(`${JSON.stringify(userId._id)}`);
    await userStore.updateUser(userId._id, newUser);
    response.redirect("/profile");
  },

  // Delete user profile
  async profileDelete(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const userId = await userStore.getUserById(loggedInUser._id);
      await userStore.deleteUserById(userId);
      response.redirect("/");
  },

  // Register new user
  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/login");
  },

  // Authenticate user by setting cookie or redirect to login page
  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  // Check for logged in cookie
  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },
};