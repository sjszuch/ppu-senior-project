import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSplashComponent } from './page-splash.component';

describe('PageSplashComponent', () => {
  let component: PageSplashComponent;
  let fixture: ComponentFixture<PageSplashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSplashComponent]
    });
    fixture = TestBed.createComponent(PageSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
