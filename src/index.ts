import express from 'express';
import morgan from 'morgan';

import diagnoseRouter from './routes/diagnoses';


const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
