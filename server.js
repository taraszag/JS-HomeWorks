// // open libr
// const express = require("express");
// const path = require("path");
// //init lib code for web-server
// const app = express();

// // setting

// const port = 3000

// app.use(express.static("public"))
// app.get('/api/result', function (req, res) {
//     res.json([{
//         id: 0,
//         text: "Task One",
//         checkbox: false,
//         color: "color:black"
//     },
//     {
//         id: 1,
//         text: "Task Two",
//         checkbox: false, 
//         color: "color:black"
//     }, {
//         id: 2,
//         text: "Task Three",
//         checkbox: false, 
//         color: "color:black"
//     },
//     {
//         id: 3, text: "Task Four",
//         checkbox: false,
//         color: "color:black"
//     },
//     {
//         id: 4,
//         text: "Task Five",
//         checkbox: false,
//         color: "color:black"
//     }]);
// })
// app.listen(port, () => {
//     console.log(`Server started  127.0.0.1:${port}`);
// })



const express = require("express");
const { request } = require("https");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

const state = {
  count: 0,
  items: []
};

app.use(express.static("public"));
//набор ф-ций для автоматизации = json.stringify
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


// app.get('/api/add/:num', function(request, response) {
//   console.log("add", request.params);
//   state.count += Number(request.params.num);
//   response.end();
// });

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})
