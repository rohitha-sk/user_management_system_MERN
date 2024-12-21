import express from 'express'; // Import express
import mongoose from 'mongoose';
import router from './router.js'; // Import the router
import cors from 'cors';

const app = express();


const PORT = 3001;
const HOST = 'localhost';

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://rohitha:123@cluster0.to2cf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error: ', error);
    }
};

connect();

app.use('/api', router); // Ensure this comes before the server starts

const server = app.listen(PORT, HOST, () => {
    console.log(`Node server is listening on ${HOST}:${PORT}`);
});
