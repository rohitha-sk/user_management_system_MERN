import express from 'express';
import cors from 'cors';
import { getUsers, getUserById, addUser, updateUser, deleteUser } from './controller.js'; // Fixed import path for the controller



const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to get all users
app.get('/users', (req, res) => {
        getUsers(req,res,next =>{
            res.send();
        })
    });

// Route to get a specific user by ID

app.post('/create_user',(req,res)=>{
    addUser(req.body,(callback)=>{
        res.send();
    });
});

app.put('/update_user',(req,res)=>{
    updateUser(req.body,(callback)=>{
        res.send(callback);
    });
});

app.delete('/delete_user',(req,res)=>{
    deleteUser(req.body,(callback)=>{
        res.send(callback);
    });
});
    

export default app;
