import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]); // State for users
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling
    const [submitted, setSubmitted] = useState(false); // State to manage submission
    const [isEdit, setIsEdit] = useState(false); // State to track editing mode
    const [selectedUser, setSelectedUser] = useState({}); // Selected user data

    useEffect(() => {
        getUsers(); // Fetch users when the component mounts
    }, []);

    const getUsers = () => {
        setLoading(true);
        axios
            .get("http://localhost:3001/api/users")
            .then((response) => {
                console.log("Response data:", response.data.users);
                setUsers(response.data?.users || []);
            })
            .catch((error) => {
                console.error("Error fetching users:", error.message);
                setError("Failed to fetch users. Please try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const addUser = (data) => {
        if (submitted) return; // Prevent duplicate submissions
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        };

        axios
            .post("http://localhost:3001/api/create_user", payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false); // Reset edit mode
            })
            .catch((error) => {
                console.error("Error adding user:", error.message);
                setError("Failed to add user. Please try again later.");
                setSubmitted(false);
            });
    };

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        };

        axios
            .put(`http://localhost:3001/api/update_user/${data.id}`, payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false); // Reset edit mode
                setSelectedUser({});
            })
            .catch((error) => {
                console.error("Error updating user:", error.message);
                setError("Failed to update user. Please try again later.");
                setSubmitted(false);
            });
    };

    const deleteUser = (id) => {
        axios
            .delete(`http://localhost:3001/api/delete_user/${id}`)
            .then(() => {
                getUsers(); // Refresh users after deletion
            })
            .catch((error) => {
                console.error("Error deleting user:", error.message);
                setError("Failed to delete user. Please try again later.");
            });
    };

    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    return (
        <div>
            <Box>
                <UserForm
                    addUser={addUser}
                    submitted={submitted}
                    data={selectedUser}
                    isEdit={isEdit}
                    updateUser={updateUser}
                />
                <UsersTable
                    rows={users}
                    selectedUser={(data) => {
                        setSelectedUser(data);
                        setIsEdit(true);
                    }}
                    deleteUser={(id) => {
                        if (window.confirm("Are you sure?")) {
                            deleteUser(id);
                        }
                    }}
                />
            </Box>
        </div>
    );
};

export default Users;
