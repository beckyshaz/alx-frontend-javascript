export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newsqft) {
    this._sqft = newsqft;
  }

  evacuationWarningMessage() {
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
