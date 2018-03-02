const express = require('express');
const readFileSync = require('fs').readFileSync;
const app = express();

const file = readFileSync('./list.json');
app.get('/', (req,res) => {
    res.send(file.toString());
});

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => console.log('App listening on port ' + app.get('port')))