const express = require("express");
const users = require("./mockdata.json");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/users", (req, res) => {
    return  res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});