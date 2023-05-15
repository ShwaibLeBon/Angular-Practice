import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInvoiceComponent } from './active-invoice.component';

describe('ActiveInvoiceComponent', () => {
  let component: ActiveInvoiceComponent;
  let fixture: ComponentFixture<ActiveInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
