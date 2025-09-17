import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaNaoAutorizadaComponent } from './rota-nao-autorizada.component';

describe('RotaNaoAutorizadaComponent', () => {
  let component: RotaNaoAutorizadaComponent;
  let fixture: ComponentFixture<RotaNaoAutorizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaNaoAutorizadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaNaoAutorizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
