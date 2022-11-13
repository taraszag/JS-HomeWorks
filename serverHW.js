// open libr
const express = require("express");
const path = require("path");
//init lib code for web-server
const app = express();

// setting
const port = 3000

const state = {
    count: 0,
    items: [],
    checkBox: []
    
};
app.use(express.static("publicHW"))
//набор ф-ций для автоматизации = json.stringify
app.use(express.json());


// app.post ('/api/check-box', function (req, res) {
//     state.checkBox.push(req.body);
//     console.log(state.checkBox)
//     res.json({ checkBox: state.checkBox });
// })

app.post('/api/text-add', function (req, res) {
    state.items.push(req.body.text);
    res.json({ items: state.items });
})


app.post('/api/delete-task/:index', function (req, res) {
    state.items.splice(Number(req.params.index), 1)
    res.json({ items: state.items })
})

app.post('/api/delete-all', function (req, res) {
    state.items.splice(0, state.items.length)
    res.json({ items: state.items });
});

app.get('/api/text-result', function (req, res) {
    res.json({ items: state.items });
});

app.listen(port, () => {
    console.log(`Server started  127.0.0.1:${port}`);
})
