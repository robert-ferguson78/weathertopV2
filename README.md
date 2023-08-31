# weathertopV2

Student Name : Robert Ferguson
Student Number : 20104121
Github URL : https://github.com/robert-ferguson78/weathertopV2
Deployed URL : https://robert-f-weathertopv2.glitch.me/

# Release Version

This is WeatherTop Release 4 of the joint assignment of Web & Programming in Javascript

# Brief description of assignment

This is an applictaion re-written from the Wetahertop java assignmnet, Which allows users to register as a member and create unlimited stations with attached readings for each station. Readings and stations are displayed to user in an attractive interface showing the member there historical readings and Converted reading data with stats based on reading data, trend charts and interactove maps have also been added to this project. The object of the assigemnt is to re-code WeatherTop in Express.js, Handlebars hosted on Glitch enviornment.

# Release Version

This is WeatherTop Release 4 of the joint assignment of Web & Programming in Javascript

# Features that have been implemented from the assignment brief

1. Initial values are read in from JSON file
   a. Station 
        1. Name 
        2. Latitude 
        3. Longitude 
        4. attached readings
   b. Station Readings 
        1. Date 
        2. Code 
        3. Temperature 
        4. WindSpeed 
        5. WindDirection 
        6. Pressure
   c. Member/User 
        1. Email 
        2. First Name 
        3. Last Name 
        4. Password 
        5. Stations
2. User visits site and has option to login or Signup/Register.
3. Users Readings are displayed which contain
    a. Date of reading created
    b. Weather Code
    c. Temperature
    d. WindSpeed
    e. WindDirection
    f. Pressure
4. Temperature is converted and displayed in both C & F.
5. WindSpeed is converted in Beaufort scale to user, and also accompanied by text description of Beaufort number.
6. WindDirection is converted from 0-360 value range to compass direction eg:"North East".
7. WindSpeed is converted to WindChill.
8. Ability to add new stations "Unlimited Stations" attached to logged in Member, add station form accepts Name, Lat " limited values between -90 to 90" and Long "limited values between -180 to 180" for new station entry.
9. Ability to add new Readings "Unlimited readings", Date is auto assigned with user form submission of Weather Code, Temperature, WindSpeed "limited values between 0 to 117", WindDirection "limited values between 0 to 360", Pressure.
10. Ability to delete stations attached to logged in Member/User.
11. Ability to delete Readings attached to stations.
12. Ability to delete Member/User from application and all there attached sytations including all attached station readings.
13. Stations listed in alphabetical order in Station-list/Dashboard view
14. Seperated Station and Reading views.
15. Latest readings has Weather icons assigned
    a. Location
    b. Weather Code
    c. Temperature
    d. Wind
    e. Pressure
16. Min and Max values are displayed for
    a. Temperature
    b. Wind
    c. Pressure
17. Trends are displayed for Temperature, Wind, Pressure with icons and text for values Falling, Stable and Rising based on last 3 readings from user.
18. Trend graphs are also diplsyed with 8 day forcase.
19. Member/User profile page to display user details including
    a. Email
    b. First Name
    c. Last Name
    d. Password "password is hidden with \*\*\*"
    e. Confirm password
20. Ability to update users profile for
    a. First Name
    b. Last Name
    c. Password (must match confirm password field to save)
    d. But email is unique identifier for account and can not be changed "this is by design"

# Additional Features that have been implemented

1. Custom 404 page
2. Required attribute added to form fields to ensure values for Stations, Readings and Member/User profile data.
3. Duplicate password fields to check for matching passwords "type in password twice to avoid typos" on both registrations, and profile update page.
4. Validating Email case with conversion to lowercase before Member/User is created and saved.
5. User confirmation for data deletion "Cancel and Confirm Deletion" on Station, Reading and Member/User deletion.
6. User confirmation messages for Profile update successful, account deletion, Login failed, duplicate email address.
7. Latest Readings not displayed in Reading list view until 1 reading is added & Trends only display when 3 readings are entered.
8. Custom icons added for all reading types and calculated reading type data.
9. Custom filled SVG icons for weather map display
10. Min and Max values assigned to form inputs to keep data within required data value ranges.
11. Iframe video of weather forecast data on home page.
12. Restricted route menu items are displayed for logged in users only as user validation is by middleware in the routes.js file
13. Animated icons for latest readings with wind icon animation speed + number based on Beaufort scale value.
14. Members cannot view other members stations or dashboards by directly hitting url’s of other users
15. Members or non members cannot enter, delete or modify station/reading/profile data by url’s
16. Handlebar helpers are used to display reading data based on number of readings attached to station
17. WeatherTop JS project assignment is fully responsive on mobile devices.

# Technology Used

**Javascript** (Vanilla Javascript used in site for models and form fields)
Technology Description: JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.

**Iframe** (Pull in weather widget map from https://www.windy.com)
Technology Description: An inline frame (iframe) is a HTML element that loads another HTML page within the document. It essentially puts another webpage within the parent page. They are commonly used for advertisements, embedded videos, web analytics and interactive content.

**Express JS** (web framework for Node.js)
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Handlebars JS** (JavaScript library used to create reusable webpage templates)
Handlebars compiles templates into JavaScript functions. This makes the template execution faster than most other template engines.

**Bulma framework** (used to build the frontend of site)
Technology Description: Bulma is a free, open source CSS framework based on Flexbox and built with Sass. It's 100% responsive, fully modular, and available for free.
