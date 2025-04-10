import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBoardComponent } from './demo-board.component';

describe('DemoBoardComponent', () => {
  let component: DemoBoardComponent;
  let fixture: ComponentFixture<DemoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
