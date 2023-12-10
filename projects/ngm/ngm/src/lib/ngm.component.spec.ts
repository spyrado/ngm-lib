import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmComponent } from './ngm.component';

describe('NgmComponent', () => {
  let component: NgmComponent;
  let fixture: ComponentFixture<NgmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgmComponent]
    });
    fixture = TestBed.createComponent(NgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
