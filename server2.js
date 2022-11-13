// open libraries
const express = require("express");
const { request } = require("https");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

const state = {
  count: 0,
  items: [],
  tasks: [],
};

app.use(express.static("public"));
app.use(express.json());

app.get('/api/result', function(req, res) {
  res.json({ count: state.count });
});

app.post('/api/add', function(req, res) {
  state.count += Number(req.body.value);
  res.end();
})

app.post('/api/sub', function(req, res) {
  state.count -= Number(req.body.value);
  res.end();
})

app.post('/api/text-add', function(req, res) {
  state.items.push(req.body.text);
  res.json({ items: state.items });
})

app.post('/api/delete-item/:index', function(req, res) {
  state.items.splice(Number(req.params.index), 1)
  res.json({ items: state.items });
})

app.get('/api/text-result', function(req, res) {
  res.json({ items: state.items });
});

let id = 1;

app.post('/api/task', (req, res) => {
  const task = { id, text: req.body.text, isDone: req.body.isDone };
  state.tasks.push(task);
  id += 1;
  res.json(task);
});

app.post('/api/task/:id/update', (req, res) => {
  const id = Number(req.params.id);
  const isDone = req.body.isDone;

  for(let i = 0; i < state.tasks.length; i += 1) {
    if (state.tasks[i].id === id) {
      state.tasks[i].isDone = isDone;
      break;
    }
  }
  res.end();
})

app.get('/api/tasks', (req, res) => {
  res.json(state.tasks);
});
// app.get('/api/add/:num', function(request, response) {
//   console.log("add", request.params);
//   state.count += Number(request.params.num);
//   response.end();
// });

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})