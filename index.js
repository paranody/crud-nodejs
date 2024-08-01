import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/user.js'

const app = express();
const PORT = 8881;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(
    PORT, 
    () => console.log('Server running on port: http://localhost: ${PORT}')
);