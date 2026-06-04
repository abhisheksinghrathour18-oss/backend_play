import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN, ////which origin is allowed to access the resources of the server    
    credentials: true
}));
app.use(express.json({limit: "16kb"})); //to parse the incoming request body in JSON format and set a maximum size limit of 16 kilobytes for the request body. This helps prevent excessively large payloads from being processed by the server, which can be a security measure to mitigate potential denial-of-service (DoS) attacks or to manage resource usage effectively. 
app.use(express.urlencoded({extended: true, limit: "16kb"})); //to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.   
app.use(express.static("public")); //to serve static files such as images, CSS files, and JavaScript files from the "public" directory. This means that any file placed in the "public" folder can be accessed directly via a URL, making it easier to manage and serve static assets for your web application. 
app.use(cookieParser()); //to parse the cookies attached to the client request object. It populates the req.cookies property with an object keyed by the cookie names. This allows you to easily access and manipulate cookies in your Express application, which can be useful for tasks such as authentication, session management, and storing user preferences. 
export default app;
//export {app};