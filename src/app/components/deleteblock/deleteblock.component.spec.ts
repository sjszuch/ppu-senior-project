import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteblockComponent } from './deleteblock.component';

describe('DeleteblockComponent', () => {
  let component: DeleteblockComponent;
  let fixture: ComponentFixture<DeleteblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteblockComponent]
    });
    fixture = TestBed.createComponent(DeleteblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
