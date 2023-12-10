import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: NgmButtonComponent;
  let fixture: ComponentFixture<NgmButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgmButtonComponent],
    });
    fixture = TestBed.createComponent(NgmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
