
const express = require('express');
const app = express();
const port = process.env.PORT;
const runningMessage = 'Server is running on port ' + port;

app.get('/', function (req, res){
    res.send(runningMessage);
});

app.listen(port, function() {
    console.log(runningMessage);
});
