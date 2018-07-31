import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposProdutoComponent } from './tipos-produto.component';

describe('TiposProdutoComponent', () => {
  let component: TiposProdutoComponent;
  let fixture: ComponentFixture<TiposProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
