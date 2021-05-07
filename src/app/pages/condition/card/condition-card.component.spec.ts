import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionCardComponent } from './condition-card.component';

describe('ConditionCardComponent', () => {
  let component: ConditionCardComponent;
  let fixture: ComponentFixture<ConditionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
