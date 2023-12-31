import express from 'express';
import ProductRoute from './app/Product/Route';
import notFound from './middleware/404';
import handleError from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/api/v1', ProductRoute);

app.use(notFound);

app.use(handleError);

const port = process.env.APP_PORT || 3000;

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
