
/**
 * Flyweight Pattern
 *
 * @keywords: Intrinsic State, Extrinsic State
 *
 * @definition: A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the objects temporarily when they are used.
 */

/**
 * Abstract class
 */
class IgoChessman {
  getColor() {
    throw new Error('Not implemented');
  }

  display() {
    return this.getColor();
  }
}

class BlackIgoChessman extends IgoChessman {
  getColor() {
    return 'black';
  }
}

class WhiteIgoChessman extends IgoChessman {
  getColor() {
    return 'white';
  }
}

class IgoChessmanFactory {
  constructor() {
    // Implementing Singleton pattern for this factory
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
    this.map = new Map();
    this.map.set('b', new BlackIgoChessman());
    this.map.set('w', new WhiteIgoChessman());
  }

  getIgoChessman(color) {
    return this.map.get(color);
  }
}

export {
  BlackIgoChessman,
  WhiteIgoChessman,
  IgoChessmanFactory,
};
