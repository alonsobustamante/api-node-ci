const express = require("express")
const app = express()

app.get("/health", (req, res) => {
    res.status(200).json({status: "ok"})
})

app.get("/version", (req, res) => {
  res.status(200).json({ version: '1.0.0' });
});


module.exports = app;