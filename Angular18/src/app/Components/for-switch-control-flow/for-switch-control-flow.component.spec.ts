import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwitchControlFlowComponent } from './for-switch-control-flow.component';

describe('ForSwitchControlFlowComponent', () => {
  let component: ForSwitchControlFlowComponent;
  let fixture: ComponentFixture<ForSwitchControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwitchControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwitchControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
