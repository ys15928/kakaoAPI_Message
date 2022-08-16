const express = require("express"); // express 모듈 추가하기

const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/html/message.html");
});

app.get("/info", (request, response) => {
  response.sendFile(__dirname + "/html/info.html");
});

app.listen(port, function () {
  console.log("Listening at 8080");
});
