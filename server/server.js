import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import {readdirSync} from "fs";

const morgan = require('morgan');

require('dotenv').config();

const app = express();

mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB Error => ", err));


// middleware

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"],
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

// autoloading routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));

