import * as chai from 'chai';
import { Adapter, Target, Adaptee } from '../../src/structural-pattern/adapter/Adapter';

const { assert } = chai;

/**
 * TODO: Fix the eslint rule for Mocha
 */
/* eslint-disable */
describe('Structural-pattern ---> Adapter', function () {
    let target, adaptee;
    before(function () {
        target = new Target(220);
        adaptee = new Adaptee(110);
    });

    it('Target can not accomodate', function () {
        let result = target.plug(adaptee.selfVoltage);

        assert.strictEqual(result, 'Warning! Not a supported voltage');
    });

    it('Target can accomodate with the help of adapter', function () {
        const adapter = new Adapter(Target.selfVoltage, adaptee);
        let result = adapter.plug(110);

        assert.strictEqual(result, "Power is on");
    });
});
