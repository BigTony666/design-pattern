
/**
 * Flyweight Pattern
 *
 * @keywords: Intrinsic State, Extrinsic State
 *
 * @definition: A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the objects temporarily when they are used.
 *
 * @example The String class in JDK uses this pattern
 */

/**
 * Abstract class
 */
class IgoChessman {
  getColor() {
    throw new Error('Not implemented');
  }

  display(coord) {
    return {
      color: this.getColor(),
      coordinate: {
        x: coord.x,
        y: coord.y,
      },
    };
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

/**
 * Coordinate class, an external class that will be injected into IgoChessman class, it is an extrinsic state
 */
class Coordinates {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }
}
export {
  BlackIgoChessman,
  WhiteIgoChessman,
  IgoChessmanFactory,
  Coordinates,
};
