import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';

import user from './user/user.route';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(express.static('public'));

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json'
    }
  })
);

app.get('/liveness', async (_req, res) => {
  return res.json({ message: 'OK!' }).status(200);
});

app.use(user);

app.listen(PORT, () => {
  console.log('🚀 Server started. Listening on port', PORT);
});
