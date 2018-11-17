import * as chai from 'chai';
import { IgoChessmanFactory } from '../../../src/structural-pattern/flyweight/Flyweight';

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
    const white1 = factory.getIgoChessman('b');
    const white2 = factory.getIgoChessman('b');
    assert.deepStrictEqual(white1, white2);
  });
});
