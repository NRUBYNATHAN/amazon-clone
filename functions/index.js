/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Mxr8ESDQuZ1MzyRm3RphuLgMpH5rkm5kb0LDqO7upRblPxpWUomgG2IFkbDwgQMVsCuGe4nwiI2G8YB9fgxfBQ2002SZ01zfd"
);

// - API

// - App config
const app = express();
// - middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payments received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen Command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/challenge-3e154/us-central1/api
