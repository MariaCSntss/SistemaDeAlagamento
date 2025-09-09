import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAccountComponent } from './create-account.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { NGX_MASK_CONFIG, provideEnvironmentNgxMask } from 'ngx-mask';


describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountComponent],
      providers:[HttpClient,HttpHandler,provideEnvironmentNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
