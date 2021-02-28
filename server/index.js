const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  EMAIL_TO,
  NODE_ENV,
  PORT,
} = process.env;

const app = express();
const port = PORT || 4000;


if (NODE_ENV !== "production") {
  app.use(cors());
}

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USERNAME || !EMAIL_PASSWORD || !EMAIL_TO) {
  throw new Error("All email environment variables must be set");
}

const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: parseInt(EMAIL_PORT, 10),
  auth: { user: EMAIL_USERNAME, pass: EMAIL_PASSWORD },
});

app.use(bodyParser.json());

app.post("/email", async (req, res) => {
  console.info(req.body);
  if (
    !req.body.from ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.text
  ) {
    res.status(400).send(JSON.stringify({ status: false }));
    return;
  }

  await transport.sendMail(
    {
      from: req.body.from,
      to: EMAIL_TO,
      subject: `Incoming email from: ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.text,
    },
    (err) => {
      if (err) throw err;
    }
  );

  res.status(200).send(JSON.stringify({ status: true }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
