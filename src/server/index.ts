import express from 'express';
import { stockRouter } from './stockRouter';

const app = express();

app.use(express.json());

app.use('/api/db/', stockRouter);

app.listen(3000, () => {
  console.log('Server running in port 3000');
});
