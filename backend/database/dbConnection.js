import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.DB_URI, {dbName : "EVENT_MANAGEMENT"})
    .then(() => console.log("Connected to database!!"))
    .catch((err) => console.log("Some error occurred ", err))
}