const express = require("express");
const app = express();

const { WebhookClient } = require("dialogflow");

app.get("/", (req, res) => {
  res.send("Hi from server!");
});

app.post("/", express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  const intentMap = new Map();
  intentMap.set("Take Order - yes", handleIntent);
  intentMap.set("Take Order - no", handleIntent);
  agent.handleRequest(intentMap);
});

app.listen(8080, () => {
  console.log("server running...");
});