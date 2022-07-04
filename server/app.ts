import express from 'express';
import { test, redirect } from './controllers';
import { config } from 'dotenv';
config();

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.static('dist'));

app.use(express.json());

app.get('/test', test);

app.get('/*', redirect);
app.listen(SERVER_PORT, () => console.log(`For the Horde! [${SERVER_PORT}]`));
