import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

dotenv.config();

const PORT = process.env.PORT;

const app = express();

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log('Mongo is runnig')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/user', userRoutes);
