
//require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
import connectDB from "./db/db.js";

import app from "./app.js";

(async () => {
    try {
        await connectDB();
        
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        app.on("error", (err) => {
            console.error("Server error:", err);
            process.exit(1);
        });
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
})();