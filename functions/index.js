const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const privateToken ="sk_test_51NpDCvSF4odBmR80ROgNbaQvspH5rDuNMrx7n1YOhSAatWiXra8kl6GJHfZWUJIhbQs2SIJOViv99iGqKYfzEQLQ00vMOa8oXm";
const stripe = require("stripe")(privateToken);
// Api

// APP CONFIG
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  //   ok created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);
