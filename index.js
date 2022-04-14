const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const databaseConnect = require("./database/connexion")
const user = require('./routes/user');

app.use(cors());
app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({limit: '3mb', extended: true}));

async function init() {
    await databaseConnect();

    app.listen(port, () => {
        console.log(`Listening on ${port}`);
    });
}

init();


app.get("/", (req, res) => {
    res.send("Serveur Opérationnel")
});

app.use('/users', user);