import express, { Request, Response, Application} from 'express';
import { PORT } from './config';
import { GetTheLatestCurrencies } from './utils';
import { verifyCache, cache } from './middlewares/verifyCache';

// Create express server
const app: Application = express();

app.get("/ping", (req: Request, res: Response) => {
  res.send('pong');
});

app.get("/criptos", verifyCache, async (req: Request, res: Response) => {
  const currencies = await GetTheLatestCurrencies();
  cache.set('currencies', currencies);
  res.json({ total: currencies.length, currencies });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;