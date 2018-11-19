import * as chai from 'chai';
import { IgoChessmanFactory, Coordinates } from '../../../src/structural-pattern/flyweight/Flyweight';

const { assert } = chai;

describe('Structural-pattern ---> Flyweight', () => {
  let factory;

  before(() => {
    // Acquire singleton factory
    factory = new IgoChessmanFactory();
  });

  it('Create a singleton factory', () => {
    const testFactory = new IgoChessmanFactory();
    assert.deepStrictEqual(factory, testFactory);
  });

  it('Two black chessmen are the same', () => {
    const black1 = factory.getIgoChessman('b');
    const black2 = factory.getIgoChessman('b');
    assert.deepStrictEqual(black1, black2);
  });

  it('Two white chessmen are the same', () => {
    const white1 = factory.getIgoChessman('w');
    const white2 = factory.getIgoChessman('w');
    assert.deepStrictEqual(white1, white2);
  });

  it('Two different chessmen are not the same', () => {
    const white = factory.getIgoChessman('w');
    const black = factory.getIgoChessman('b');
    assert.notStrictEqual(black, white);
  });

  it('Display color and coordinate', function () {
    const black1 = factory.getIgoChessman('b');
    const black2 = factory.getIgoChessman('b');
    const white1 = factory.getIgoChessman('w');
    const white2 = factory.getIgoChessman('w');
    assert.deepStrictEqual(black1.display(new Coordinates(1, 2)), {
      color: 'black',
      coordinate: {
        x: 1,
        y: 2,
      },
    });
    assert.deepStrictEqual(black2.display(new Coordinates(3, 4)), {
      color: 'black',
      coordinate: {
        x: 3,
        y: 4,
      },
    });
    assert.deepStrictEqual(white1.display(new Coordinates(5, 6)), {
      color: 'white',
      coordinate: {
        x: 5,
        y: 6,
      },
    });
    assert.deepStrictEqual(white2.display(new Coordinates(7, 8)), {
      color: 'white',
      coordinate: {
        x: 7,
        y: 8,
      },
    });
  });
});
