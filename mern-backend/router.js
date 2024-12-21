import { Router } from 'express';
const router = Router();
import { getUsers, addUser, updateUser, deleteUser } from './controller.js';

// Use GET for retrieving users
router.get('/users', getUsers);

// Use POST for creating a new user
router.post('/create_user', addUser);

// Use PUT for updating an existing user
router.put('/update_user/:id', updateUser);

// Use DELETE for deleting a user
router.delete('/delete_user/:id', deleteUser);

export default router;
