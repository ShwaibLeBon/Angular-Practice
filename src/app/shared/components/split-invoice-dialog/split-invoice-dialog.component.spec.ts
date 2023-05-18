import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitInvoiceDialogComponent } from './split-invoice-dialog.component';

describe('SplitInvoiceDialogComponent', () => {
  let component: SplitInvoiceDialogComponent;
  let fixture: ComponentFixture<SplitInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitInvoiceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
