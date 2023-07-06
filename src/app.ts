import express from 'express';
import dispatchController from './controllers/dispatchController';
const app = express();
const port = 3001;

app.use('/', dispatchController);

app.listen(port, () => {
  console.log(`Dispatcher app listening at http://localhost:${port}`);
});
