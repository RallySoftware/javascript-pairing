import { BuildLight } from '../BuildLight';

describe('BuildLight', () => {
  let buildLight;
  beforeEach(() => {
    buildLight = new BuildLight();
  });

  it('is created', () => {
    expect(buildLight).to.exist;
  });
});
