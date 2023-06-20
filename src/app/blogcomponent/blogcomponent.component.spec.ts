import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcomponentComponent } from './blogcomponent.component';

describe('BlogcomponentComponent', () => {
  let component: BlogcomponentComponent;
  let fixture: ComponentFixture<BlogcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogcomponentComponent]
    });
    fixture = TestBed.createComponent(BlogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
