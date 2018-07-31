import { ImpostosModule } from './impostos.module';

describe('ImpostosModule', () => {
  let impostosModule: ImpostosModule;

  beforeEach(() => {
    impostosModule = new ImpostosModule();
  });

  it('should create an instance', () => {
    expect(impostosModule).toBeTruthy();
  });
});
