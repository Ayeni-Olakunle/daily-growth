const mongooseDB = require("mongoose");

mongooseDB.set("strictQuery", false);

const connectDB = async () => {
    try{
        const connect = await mongooseDB.connect(process.env.MONGO_URL)
        console.log(`Successfully connect to Database ${connect.connection.host}`);
    } catch (err) { 
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;