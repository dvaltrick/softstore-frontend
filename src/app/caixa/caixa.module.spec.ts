import { CaixaModule } from './caixa.module';

describe('CaixaModule', () => {
  let caixaModule: CaixaModule;

  beforeEach(() => {
    caixaModule = new CaixaModule();
  });

  it('should create an instance', () => {
    expect(caixaModule).toBeTruthy();
  });
});
