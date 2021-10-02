/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const fs = require("fs");
const uuidv1 = require('uuid/v1');
const bodyParser = require('body-parser');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
// rest contacts
const jsonPath = `${__dirname}\\data\\contacts.json`;
app.get('/api/contacts/list', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

app.post('/api/contacts/add', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    data = JSON.parse(data);
    const contact = req.body;
    contact._id = uuidv1();
    contact.index = data.length + 1;
    const newData = [...data, contact];
    const jsonData = JSON.stringify(newData);

    fs.writeFile(jsonPath, jsonData, (writeFileErr) => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(JSON.stringify(data));
      }
    })
  });
});

app.get('/api/contacts/:id', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    const contacts = JSON.parse(data);
    const contact = contacts.find(contactObj => contactObj._id === req.params.id) || {};
    res.end(JSON.stringify(contact));
  });
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});



// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
