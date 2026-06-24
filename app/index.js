const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
    const host =
        process.env.WEBSITE_HOSTNAME || `localhost:${PORT}`;

    const protocol =
        process.env.WEBSITE_HOSTNAME ? "https" : "http";

    console.log(`🚀 Server running at ${protocol}://${host}`);
});