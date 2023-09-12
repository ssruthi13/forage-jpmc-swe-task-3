import { ServerRespond } from './DataStreamer';

export interface Row {

  price_abc :number,
  price_def : number,
  ratio : number,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  trigger_alert: number | undefined ,
}


export class DataManipulator {
  static generateRow( serverRespond: ServerRespond[]): Row {
    const priceABC = (serverRespond [0]. top_ask.price + serverRespond[0].top _bid-price) / 2; 
    const priceDEF = (serverRespond [1]. top _ask.price + serverRespond [1].top bid price) / 2;
    const ratio = priceABC / priceDEF;
    const upperBound = 1 + 0.05;
    const lowerBound = 1 - 0.05;
    return {

      price_abc: priceABC,
      price _def: pricedEF,
      ratio,
      timestamp: serverRespond[0]. timestamp > serverRespond [1] . timestamp 
        serverRespond[0]. timestamp: serverRespond[1]. timestamp,
      upper bound: upperBound,
      lower_bound: lowerBound,
      trigger_ alert: (ratio > upperBound I| ratio < lowerBound) ? ratio : undefined,
      };
    })
  }
}
