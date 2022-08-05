import NodeCache from "node-cache";
import{ Request, Response} from 'express';

export const cache = new NodeCache({ stdTTL: 60 });

export const verifyCache = (req:Request, res:Response, next:any) => {
  try {
    if (cache.has('currencies')) {
      return res.status(200).json(cache.get('currencies'));
    }
    return next();
  } catch (err:any) {
    throw new Error(err);
  }
};