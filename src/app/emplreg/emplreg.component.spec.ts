import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplregComponent } from './emplreg.component';

describe('EmplregComponent', () => {
  let component: EmplregComponent;
  let fixture: ComponentFixture<EmplregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
