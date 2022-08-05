import axios from 'axios';
import { Currency, Exchange } from '../model/currency.model';
import { COINMARKET_API_KEY, COINMARKET_API_URL, COINMARKET_TOTAL_CURRENCIES } from '../config';

export async function GetTheLatestCurrencies(): Promise<Currency[]> {
  const bitcoin_api_url = `${COINMARKET_API_URL}cryptocurrency/listings/latest?limit=${COINMARKET_TOTAL_CURRENCIES}`;
  try {
    const { data: { data } } = await axios
      .get(bitcoin_api_url, {
        headers: {
          'X-CMC_PRO_API_KEY': COINMARKET_API_KEY
        },
      });
    return data.map((c: any) => {
      return new Currency(c.id, c.name, c.symbol, c.total_supply, c.last_updated)
    });

  } catch (error: any) {
    throw new Error(error);
  };
}

export async function GetTheExchangesList(): Promise<any[]> {
  const bitcoin_api_url = `${COINMARKET_API_URL}exchange/info`;
  try {
    let { data: { data } } = await axios
      .get(bitcoin_api_url, {
        headers: {
          'X-CMC_PRO_API_KEY': COINMARKET_API_KEY
        },
      });

    return data.map((c: any) => {
      return new Exchange(c.id, c.name)
    });

  } catch (error: any) {
    throw new Error(error);
  };
}
