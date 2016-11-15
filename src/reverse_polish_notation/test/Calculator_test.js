import { Calculator } from '../Calculator';

describe("Calculator", function() {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('is created', () => {
    expect(calculator).to.exist;
  });
});
