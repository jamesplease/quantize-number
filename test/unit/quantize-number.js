import quantizeNumber from '../../src/quantize-number';

describe('quantizeNumber', () => {
  it('should be a function', () => {
    expect(quantizeNumber).to.be.a('function');
  });

  it('should handle a quantum of 0', () => {
    expect(quantizeNumber(100, 0)).to.equal(0);
    expect(quantizeNumber(-100, 0)).to.equal(0);
    expect(quantizeNumber(-100, 0, {cover: true})).to.equal(0);
  });

  it('should handle a value of 0', () => {
    expect(quantizeNumber(0, -100)).to.equal(0);
    expect(quantizeNumber(0, 5)).to.equal(0);
    expect(quantizeNumber(0, 5, {cover: true})).to.equal(0);
  });

  it('should handle both value and quantum being 0', () => {
    expect(quantizeNumber(0, 0)).to.equal(0);
    expect(quantizeNumber(0, 0, {cover: true})).to.equal(0);
  });

  it('should quantize values that divide evenly correctly', () => {
    expect(quantizeNumber(9, 3)).to.equal(9);
    expect(quantizeNumber(100, 2)).to.equal(100);
    expect(quantizeNumber(25, 5)).to.equal(25);
  });

  it('should quantizeNumber values that do not divide evenly correctly', () => {
    expect(quantizeNumber(9, 2)).to.equal(8);
    expect(quantizeNumber(12, 5)).to.equal(10);
    expect(quantizeNumber(77, 25)).to.equal(75);
    expect(quantizeNumber(99, 25)).to.equal(75);
  });

  it('should support a covering algorithm by passing cover:true', () => {
    expect(quantizeNumber(9, 2, {cover: true})).to.equal(10);
    expect(quantizeNumber(12, 5, {cover: true})).to.equal(15);
    expect(quantizeNumber(77, 25, {cover: true})).to.equal(100);
    expect(quantizeNumber(6, 3, {cover: true})).to.equal(6);
  });

  it('should work the same for negative numbers', () => {
    expect(quantizeNumber(-9, 3)).to.equal(-9);
    expect(quantizeNumber(-100, -2)).to.equal(-100);
    expect(quantizeNumber(-25, 5)).to.equal(-25);

    expect(quantizeNumber(-9, 2)).to.equal(-8);
    expect(quantizeNumber(-12, -5)).to.equal(-10);
    expect(quantizeNumber(-77, 25)).to.equal(-75);

    expect(quantizeNumber(-9, 2, {cover: true})).to.equal(-10);
    expect(quantizeNumber(-12, 5, {cover: true})).to.equal(-15);
    expect(quantizeNumber(-77, 25, {cover: true})).to.equal(-100);
    expect(quantizeNumber(-6, 3, {cover: true})).to.equal(-6);
  });
});
