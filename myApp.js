let express = require('express');
let app = express();

// app.get("/", (req, res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));


































 module.exports = app;
