/**
 * @description:
 *   https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/adapter.html
 *   http://www.runoob.com/design-pattern/adapter-pattern.html
 *   https://blog.csdn.net/lovelion/article/details/8624325
 */


/**
  * Target, it can be a class or an interface(although there is no interface in JavaScript)
  */
class Target {
  constructor(selfVoltage) {
    this.selfVoltage = selfVoltage;
  }

  plug(voltage) {
    return voltage !== this.selfVoltage ? 'Warning! Not a supported voltage'
      : 'Power is on';
  }
}

/**
 *
 */
class Adapter extends Target {
  constructor(targetVoltage, adaptee) {
    super(targetVoltage);
    this.adaptee = adaptee;
  }

  plug(voltage) {
    if (voltage === this.adaptee.selfVoltage) {
      return this.adaptee.plugAndStart();
    }
    return 'Failed to adapt';
  }
}

class Adaptee {
  constructor(selfVoltage) {
    this.selfVoltage = selfVoltage;
  }

  plugAndStart() {
    return 'Power is on';
  }
}

export { Target, Adapter, Adaptee };
