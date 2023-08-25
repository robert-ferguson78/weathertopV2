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
      message: request.message,
    };
    response.render("login-view", viewData);
  },

  // Logout with redirect
  logout(request, response) {
    response.cookie("userAuth", "");
    response.redirect("/");
  },

  // Signup page to display
  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
      message: request.message,
    };
    response.render("signup-view", viewData);
  },

  // Display profile page
  async profile(request, response) {
      const viewData = {
        title: "Edit User Profile",
        message: request.message,
      };
      console.log(`${JSON.stringify(viewData)}`);
      response.render("profile", viewData);
    },
  
  // Update profile info
  async profileUpdate(request, response) {
  const loggedInUser = request.user._id;
  const userId = await userStore.getUserById(loggedInUser);
  // Only upadte editable fields as email is not editable
  const newUser = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    password: request.body.password
  };
    // console.log(`${JSON.stringify(userId._id)}`);
    await userStore.updateUser(userId._id, newUser);
    response.cookie("message_success", "Profile Updated Successfully", { maxAge: 10000 });
    response.redirect("/profile");
  },

  // Delete user profile
  async profileDelete(request, response) {
    const loggedInUser = request.user._id;
    const userId = await userStore.getUserById(loggedInUser);
      await userStore.deleteUserById(userId);
      response.redirect("/");
  },

  // Register new user
  async register(request, response) {
    const user = {
      email: request.body.email.toLowerCase(),
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      password: request.body.password
    };
    const existingUser = await userStore.getUserByEmail(request.body.email.toLowerCase());
    if (existingUser) {
      response.cookie('message_error', 'This Email Is Already Registered.', { maxAge: 10000 });
      response.redirect("/signup");
    } else {
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/login");
    }
  },

  // Authenticate user by setting cookie or redirect to login page
  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email.toLowerCase());
    const userPass = user.password;
    if (user && request.body.password === userPass) {
      response.cookie("userAuth", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.cookie('message_error', 'Login Failed, Incorrect Credentials', { maxAge: 10000 });
      response.redirect("/login");
    }
  },

};