const express = require('express');
const mongoose = require('mongoose');
const app = express();
const UserRoute = require('./routes/user');
const Port = 3000;

//Db connection
const url = "mongodb://localhost:27017/avatar"
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected"));


app.use(express.json());
app.use('/user', UserRoute);

app.listen(Port, () => {
    console.log("Server is runnig" + Port)
})