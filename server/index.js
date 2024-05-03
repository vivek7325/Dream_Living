import express from "express";
import cors from "cors";
import users from "./Routes/user.js";
import properties from "./Routes/properties.js";

const app = express();
const PORT = process.env.PORT || 3000;

let corsOptions = {
    origin: ['http://localhost:5173'], // allow access for fetch api 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use('/users', users);
app.use('/properties', properties);


app.listen(PORT, () => {
    console.log(PORT);
    console.log("Server Start");
})

export default app;