import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEvalsComponent } from './dialog-evals.component';

describe('DialogEvalsComponent', () => {
  let component: DialogEvalsComponent;
  let fixture: ComponentFixture<DialogEvalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEvalsComponent]
    });
    fixture = TestBed.createComponent(DialogEvalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
