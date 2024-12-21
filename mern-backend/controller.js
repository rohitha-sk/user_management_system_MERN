import User from './model.js'; // Import only the User model

// Function to get all users
const getUsers = (req, res, next) => {
    User.find()
    .then(response => {
        res.status(200).json({ users: response }); // Return 200 OK status with the users
    })
    .catch(error => {
        res.status(500).json({ message: error.message }); // Return 500 for server error
    });
};

// Function to add a user
const addUser = (req, res, next) => {
    const user = new User({
        id:req.body.id,
        name: req.body.name,
        // Assuming MongoDB handles _id automatically, you don't need to pass id
    });
    
    user.save()
        .then(response => {
            res.status(201).json({ message: 'User created successfully', user: response }); // Return 201 Created status
        })
        .catch(error => {
            res.status(400).json({ message: 'Error creating user', error: error.message }); // Return 400 for bad request
        });
};

// Function to update a user
const updateUser = (req, res, next) => {
    const { id, name } = req.body;

    User.updateOne({ id: id }, { $set: { name } })
    .then(response => {
        res.status(200).json({ message: 'User updated successfully', response });
    })
    .catch(error => {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    });
};

// Function to delete a user
// Function to delete a user
const deleteUser = (req, res) => {
    const { id } = req.params; // Extract the id from the URL parameters

    User.deleteOne({ id: id }) // Match based on the id
        .then(response => {
            if (response.deletedCount > 0) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Error deleting user', error: error.message });
        });
};


// Export functions
export { getUsers, addUser, updateUser, deleteUser };
