import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullComponent } from './pull.component';

describe('PointsComponent', () => {
  let component: PullComponent;
  let fixture: ComponentFixture<PullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
