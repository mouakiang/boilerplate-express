let express = require('express');
let app = express();

// app.get("/", (req, res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });

// app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    res.json({
        message: "Hello Json"
    });
});






























 module.exports = app;
