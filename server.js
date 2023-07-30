import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { engine } from "express-handlebars";
import { router } from "./routes.js";

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(fileUpload());
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use("/", router);

// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html', 'png', 'jpg', 'svg' ],
//   index: false,
//   maxAge: '1d',
//   redirect: false,
//   setHeaders: function (res, path, stat) {
//     res.set('x-timestamp', Date.now())
//   }
// }

// app.use(express.static('public', options));

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log(`Todolist started on http://localhost:${listener.address().port}`);
});
