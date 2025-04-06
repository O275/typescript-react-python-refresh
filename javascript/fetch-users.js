require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (response.status !== 200) throw new Error(`Response status: ${response.status}`);
    return response.data;
};

app.get("/users", async (req, res) => {
    try {
        const users = await fetchUsers();
        res.json({ success: true, data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching users" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
