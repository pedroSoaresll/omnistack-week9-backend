const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoAdminUsername = process.env.MONGO_ADMIN_USERNAME;
const mongoAdminPassword = process.env.MONGO_ADMIN_PASSWORD;
const mongoDatabase = process.env.MONGO_DATABASE;

var connectWithRetry = function () {
  let timer = 0;

  return mongoose.connect(`mongodb://${mongoAdminUsername}:${mongoAdminPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => clearTimeout(timer))
    .catch(() => timer = setTimeout(() => connectWithRetry(), 500));
};
connectWithRetry();


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
