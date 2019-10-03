const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoAdminUsername = process.env.MONGO_ADMIN_USERNAME;
const mongoAdminPassword = process.env.MONGO_ADMIN_PASSWORD;
const mongoDatabase = process.env.MONGO_DATABASE;

mongoose.connect(`mongodb://${mongoAdminUsername}:${mongoAdminPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
