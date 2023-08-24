let express = require('express');
let app = express();
const dotenv = require("dotenv").config;
// app.get("/", (req, res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });

// app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    var res = "Hello World".toUpperCase();
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res = "Hello json.toUpperCase()"
    } else {
        res = "Hello json";
    }
    res.json({"message": res});
});






























 module.exports = app;
