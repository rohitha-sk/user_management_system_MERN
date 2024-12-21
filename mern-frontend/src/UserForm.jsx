/* eslint-disable react/prop-types */
import { Button, Grid, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, submitted, data, isEdit, updateUser }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Validate input
        if (!id || !name || isNaN(id) || id <= 0) {
            alert("Please enter a valid ID and Name.");
            return;
        }

        if (isEdit) {
            updateUser({ id, name }); // Call updateUser for edit mode
        } else {
            addUser({ id, name }); // Call addUser for add mode
            setId(""); // Clear form for add mode
            setName("");
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#f0f0f0",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "600px",
                margin: "auto",
            }}
        >
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                color: "#333",
                                marginBottom: "20px",
                                textAlign: "center",
                            }}
                        >
                            {isEdit ? "Edit User" : "Add User"}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="ID"
                            type="number"
                            name="id"
                            variant="outlined"
                            sx={{ backgroundColor: "#fff" }}
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            disabled={isEdit} // Prevent editing ID for update
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Name"
                            type="text"
                            name="name"
                            variant="outlined"
                            sx={{ backgroundColor: "#fff" }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#00c6e6",
                                color: "#fff",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "#00c6e6",
                                },
                            }}
                            disabled={submitted} // Prevent multiple submissions
                        >
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default UserForm;
