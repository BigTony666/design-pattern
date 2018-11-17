import * as chai from 'chai';
import { Adapter, Target, Adaptee } from '../../../src/structural-pattern/adapter/Adapter';

const { assert } = chai;


describe('Structural-pattern ---> Adapter', function () {
  let target;
  let adaptee;
  before(function () {
    target = new Target(220);
    adaptee = new Adaptee(110);
  });

  it('Target can not accomodate', function () {
    const result = target.plug(adaptee.selfVoltage);

    assert.strictEqual(result, 'Warning! Not a supported voltage');
  });

  it('Target can accomodate with the help of adapter', function () {
    const adapter = new Adapter(Target.selfVoltage, adaptee);
    const result = adapter.plug(110);

    assert.strictEqual(result, 'Power is on');
  });
});
