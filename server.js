// open libr
const express = require("express");
const path = require("path");
//init lib code for web-server
const app = express();

// setting

const port = 3000

app.use(express.static("publicHW"))
app.get('/api/tasks', function (req, res) {
    res.json([{
        id: 0,
        text: "Task One",
        checkbox: false,
        color: "color:black"
    },
    {
        id: 1,
        text: "Task Two",
        checkbox: false, 
        color: "color:black"
    }, {
        id: 2,
        text: "Task Three",
        checkbox: false, 
        color: "color:black"
    },
    {
        id: 3, text: "Task Four",
        checkbox: false,
        color: "color:black"
    },
    {
        id: 4,
        text: "Task Five",
        checkbox: false,
        color: "color:black"
    }]);
})
app.listen(port, () => {
    console.log(`Server started  127.0.0.1:${port}`);
})