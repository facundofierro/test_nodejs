import NodeCache from "node-cache";

export const cache = new NodeCache({ stdTTL: 60 });

export const verifyCache = (req:any, res:any, next:any) => {
  try {
    if (cache.has('currencies')) {
      console.log('getting from cache')
      return res.status(200).json(cache.get('currencies'));
    }
    return next();
  } catch (err:any) {
    throw new Error(err);
  }
};