import quantizeValue from '../../src/quantize-value';

describe('quantizeValue', () => {
  it('should be a function', () => {
    expect(quantizeValue).to.be.a('function');
  });

  it('should handle a quantum of 0', () => {
    expect(quantizeValue(100, 0)).to.equal(0);
    expect(quantizeValue(-100, 0)).to.equal(0);
    expect(quantizeValue(-100, 0, {cover: true})).to.equal(0);
  });

  it('should handle a value of 0', () => {
    expect(quantizeValue(0, -100)).to.equal(0);
    expect(quantizeValue(0, 5)).to.equal(0);
    expect(quantizeValue(0, 5, {cover: true})).to.equal(0);
  });

  it('should handle both value and quantum being 0', () => {
    expect(quantizeValue(0, 0)).to.equal(0);
    expect(quantizeValue(0, 0, {cover: true})).to.equal(0);
  });

  it('should quantize values that divide evenly correctly', () => {
    expect(quantizeValue(9, 3)).to.equal(9);
    expect(quantizeValue(100, 2)).to.equal(100);
    expect(quantizeValue(25, 5)).to.equal(25);
  });

  it('should quantizeValue values that do not divide evenly correctly', () => {
    expect(quantizeValue(9, 2)).to.equal(8);
    expect(quantizeValue(12, 5)).to.equal(10);
    expect(quantizeValue(77, 25)).to.equal(75);
    expect(quantizeValue(99, 25)).to.equal(75);
  });

  it('should support a covering algorithm by passing cover:true', () => {
    expect(quantizeValue(9, 2, {cover: true})).to.equal(10);
    expect(quantizeValue(12, 5, {cover: true})).to.equal(15);
    expect(quantizeValue(77, 25, {cover: true})).to.equal(100);
    expect(quantizeValue(6, 3, {cover: true})).to.equal(6);
  });

  it('should work the same for negative numbers', () => {
    expect(quantizeValue(-9, 3)).to.equal(-9);
    expect(quantizeValue(-100, -2)).to.equal(-100);
    expect(quantizeValue(-25, 5)).to.equal(-25);

    expect(quantizeValue(-9, 2)).to.equal(-8);
    expect(quantizeValue(-12, -5)).to.equal(-10);
    expect(quantizeValue(-77, 25)).to.equal(-75);

    expect(quantizeValue(-9, 2, {cover: true})).to.equal(-10);
    expect(quantizeValue(-12, 5, {cover: true})).to.equal(-15);
    expect(quantizeValue(-77, 25, {cover: true})).to.equal(-100);
    expect(quantizeValue(-6, 3, {cover: true})).to.equal(-6);
  });
});
