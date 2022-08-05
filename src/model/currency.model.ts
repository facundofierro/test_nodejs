export class Currency {
  constructor(
    public currency_id?: number,
    public currency_name?: string,
    public currency_symbol?: string,
    public currency_total_supply?: number,
    public currency_last_updated?: Date
  ) {

  }
}

export class Exchange {
  constructor(
    public id?: number,
    public name?: string,
  ) {

  }
}