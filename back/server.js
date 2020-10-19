const express = require("express")
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const Router = require("./routes/index")
const db = require("./db/index")
const cors = require("cors")

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));



app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});



app.use("/api", Router)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})

db.sync({ force: false })
  .then(() => {
        app.listen(8080, () => console.log("Connect to port: 8080"))

    })
