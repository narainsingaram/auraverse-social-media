import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { readdirSync } from "fs";
import { join } from "path";

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

// Middleware

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:3000"],
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

// Autoloading routes
const routesPath = join(__dirname, "routes");
readdirSync(routesPath).forEach((file) => {
  if (file.endsWith(".js")) {
    const route = require(join(routesPath, file)).default;
    app.use("/api", route);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
