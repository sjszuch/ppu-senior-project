import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblockComponent } from './addblock.component';

describe('AddblockComponent', () => {
  let component: AddblockComponent;
  let fixture: ComponentFixture<AddblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddblockComponent]
    });
    fixture = TestBed.createComponent(AddblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
