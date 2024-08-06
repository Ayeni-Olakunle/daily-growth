const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();
const cors = require("cors");
const connectDB = require("./growth/config/db")
const errorMiddle = require("./growth/middleware/errorMiddleware")


connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
});

app.use("/api/v1/signup", require("./growth/router/auth"))


app.use(errorMiddle)


app.listen(PORT, () => {
    console.log(`Your listening at ${PORT}`);
    
})