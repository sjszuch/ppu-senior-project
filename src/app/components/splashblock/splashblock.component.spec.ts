import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashblockComponent } from './splashblock.component';

describe('SplashblockComponent', () => {
  let component: SplashblockComponent;
  let fixture: ComponentFixture<SplashblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashblockComponent]
    });
    fixture = TestBed.createComponent(SplashblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
