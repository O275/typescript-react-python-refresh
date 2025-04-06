const axios = require("axios");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/users", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (response.status !== 200) throw new Error(`Response status: ${response.status}`);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error fetching users");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});