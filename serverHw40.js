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
  itemsFilter: '',
  tasks: [],
  urgentTask: [],
};

app.use(express.static("publicHW"));
app.use(express.json());


let id = 1;

app.post('/api/task', (req, res) => {
  const task = { id, text: req.body.text, isDone: req.body.isDone};
  state.tasks.push(task);
  id += 1;
  res.json(task);
});

app.post('/api/urgency', (req, res) => {
  const task = { id, text: req.body.text, isDone: req.body.isDone, dueDate:req.body.dueDate};
  state.urgentTask.push(task);
  id += 1;
  res.json(task);
});

app.post('/api/task/:id/update', (req, res) => {
  const id = Number(req.params.id);
  const isDone = req.body.isDone;
  for(let i = 0; i < state.urgentTask.length; i += 1) {
    if (state.urgentTask[i].id === id) {
      state.urgentTask[i].isDone = isDone;}
      break;
    }
  for(let i = 0; i < state.tasks.length; i += 1) {
    if (state.tasks[i].id === id) {
      state.tasks[i].isDone = isDone;
      break;
    }
  }
  res.end();
})
app.post('/api/task/:id/delete', (req, res) => {
  const id = Number(req.params.id);
  for(let i = 0; i < state.tasks.length; i += 1) {
    if (state.tasks[i].id === id) {
      state.tasks.splice(i, 1)
      break;
    }
  }
  for(let i = 0; i < state.urgentTask.length; i += 1) {
    if (state.urgentTask[i].id === id) {
      state.urgentTask.splice(i, 1)
      break;
    }
  }
  res.end();
})

app.post('/api/task/delete/all', (req, res) => {
      state.tasks.splice(0,state.tasks.length)
      state.urgentTask.splice(0,state.urgentTask.length)
  res.end();
})

app.post('/api/filter', (req, res) => {
  const task = req.body.textFilter;
  state.itemsFilter = task;
  res.json(state.itemsFilter);
});


app.get('/api/tasks', (req, res) => {
  res.json(state.tasks);
});

app.get('/api/UrgTasks', (req, res) => {
  res.json(state.urgentTask);
});

app.get('/api/filters', (req, res) => {
  const task = state.itemsFilter
  res.json(task);
});

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})    

