import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularDisplayComponent } from './regular-display.component';

describe('RegularDisplayComponent', () => {
  let component: RegularDisplayComponent;
  let fixture: ComponentFixture<RegularDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
