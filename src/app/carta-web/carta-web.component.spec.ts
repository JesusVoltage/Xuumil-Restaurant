import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaWebComponent } from './carta-web.component';

describe('CartaWebComponent', () => {
  let component: CartaWebComponent;
  let fixture: ComponentFixture<CartaWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
