const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let result = [
  {
    title: 'todo 1',
    id: 1,
  },
  {
    title: 'todo 2',
    id: 2,
  },
];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/list', function(req, res) {
  res.send(result);
});

app.post('/api/list', function(req, res) {
  let title = req.body.title;
  let id = result.length + 1;
  let todo = { id, title };
  result.push(todo);
  res.send(todo);
});

app.delete('/api/list/:id', function(req, res) {
  let id = req.params.id;
  result = result.filter(t => t.id != id);
  res.send({});
});

let server = app.listen(8000, function() {
  let host = server.address().address;
  let port = server.address().port;
});
console.log('Listening on port 8000');
