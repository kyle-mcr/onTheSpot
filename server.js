const   express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path'),
        app = express();

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.json());

require('./server/config/routes.js')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log('listening on port 8000'));