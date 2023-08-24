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
    const messageStyle = process.env.MESSAGE_STYLE;

    let responseMessage = "Hello json";

    if(messageStyle && messageStyle.toLowerCase() === "uppercase") {
        responseMessage = responseMessage.toUpperCase();

        const responseObject = {message: responseMessage};

        res.json(responseObject);
    }
});






























 module.exports = app;
