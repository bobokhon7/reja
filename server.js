console.log("web server started");
const express = require("express");
const app = express();
const http = require("http");

//1 enter code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code

//3 views code
app.set("views", "views");
app.set("veiws engine", "ejs");

//4 Routing code
app.get("/", function (req, res) {
  res.end("hello world Bobokhon");
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, function () {
  console.log(`The server is running succesfully on port ${PORT}`);
});
